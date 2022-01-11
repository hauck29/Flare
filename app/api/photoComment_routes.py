from flask import Blueprint, request, session
from flask_login import login_required
from app.models import Photo, User, Comment, PhotoComment
from wtforms.validators import DataRequired
from datetime import datetime
from app.models import db
from app.forms.photo_comment_form import PhotoCommentForm



photoComment_routes = Blueprint('photoComments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# READ ALL commentS
@photoComment_routes.route('/')
def get_all_comments():
    photoComments = PhotoComment.query.all()
    results_dict = {'photoComment': [photoComment.to_dict() for photoComment in photoComments]}
    if results_dict:
        return results_dict
    else:
        return 'comments not found', 404

# POST ONE comment
@photoComment_routes.route('/', methods=["POST"])
@login_required
def create_comment():
    form = PhotoCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    photoComment = PhotoComment(
        user_id=form.data['user_id'],
        photo_id=form.data['photo_id'],
        pcontent=form.data['pcontent'],
        createdAt=datetime.now(),
        updatedAt=datetime.now(),
    )
    db.session.add(photoComment)
    db.session.commit()
    return photoComment.to_dict()

# UPDATE ONE comment
@photoComment_routes.route("/<int:id>/", methods=["PUT"])
@login_required
def update_comment(id):
    photoComment = PhotoComment.query.get(id)
    req = request.get_json()
    if photoComment:
        photoComment.pcontent = req
        db.session.commit()
        return photoComment.to_dict()
    else:
        return "comment not found", 404

# DELETE ONE comment
@photoComment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_photo_comment(id):
    print('id', id)
    photoComment = PhotoComment.query.get(id)
    if photoComment:
        db.session.delete(photoComment)
        db.session.commit()
        return "Ok", 200
    else:
        return "comment not found", 404
