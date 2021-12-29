from flask import Blueprint, request, session
from flask_login import login_required
from app.models import Photo, User, Comment
from wtforms.validators import DataRequired
from datetime import datetime
from app.models import db
from app.forms.comment_form import CommentForm



comment_routes = Blueprint('comments', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# READ ONE comment
@comment_routes.route("/<int:id>")
@login_required
def get_one_comment(id):
    comment = Comment.query.get(id)
    if comment:
        return comment.to_dict()
    else:
        return "comment not found", 404

# READ ALL commentS
@comment_routes.route('/')
def get_all_comments():
    comments = Comment.query.all()
    results_dict = {'comment': [comment.to_dict() for comment in comments]}
    if results_dict:
        return results_dict
    else:
        return 'comments not found', 404

# POST ONE comment
@comment_routes.route('/', methods=["POST"])
@login_required
def create_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    comment = Comment(
        user_id=form.data['user_id'],
        content=form.data['content'],
        createdAt=datetime.now(),
        updatedAt=datetime.now(),
    )
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()

# UPDATE ONE comment
@comment_routes.route("/<int:id>/", methods=["PUT"])
@login_required
def update_comment(id):
    comment = Comment.query.get(id)
    req = request.get_json()
    if comment:
        comment.content = req
        db.session.commit()
        return comment.to_dict()
    else:
        return "comment not found", 404

# DELETE ONE comment
@comment_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_comment(id):
    print('id', id)
    comment = Comment.query.get(id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return "Ok", 200
    else:
        return "comment not found", 404
