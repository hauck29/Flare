from flask import Blueprint, request, session
from flask_login import login_required
from app.models import Photo, User, Comment
from wtforms.validators import DataRequired
# from app.forms.comment_form import CommentForm
from datetime import datetime
from app.models import db
from app.forms.photo_form import PhotoForm


post_routes = Blueprint('photos', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# READ ONE PHOTO
@post_routes.route("/<int:id>")
@login_required
def get_one_photo(id):
    photo = Photo.query.get(id)
    if photo:
        return photo.to_dict()
    else:
        return "Photo not found", 404

# READ ALL PHOTOS
@post_routes.route('/')
def photos():
    # userId = session['_user_id']
    # user = User.query.get(userId).to_dict()
    results = Photo.query.get().order_by(Photo.createdAt.desc()).all()

    results_dict = {photo.id: photo.to_dict() for photo in results}
    return results_dict

# POST ONE PHOTO
@post_routes.route('/', methods=["POST"])
@login_required
def create_photo():
    form = PhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    photo = Photo(
        user_id=form.data['user_id'],
        url=form.data['url'],
        caption=form.data['caption'],
        createdAt=datetime.now(),
        updatedAt=datetime.now(),
    )

    db.session.add(photo)
    db.session.commit()
    return photo.to_dict()

# UPDATE ONE POST
@post_routes.route("/<int:id>", methods=["PUT"])
def update_photo(id):
    photo = Photo.query.get(id)
    req = request.get_json()
    if photo:
        photo.description = req
        db.session.commit()
        return photo.to_dict()
    else:
        return "Photo not found", 404

# DELETE ONE POST
@post_routes.route("/<int:id>", methods=["DELETE"])
def delete_photo(id):
    print('id', id)
    photo = Photo.query.get(id)
    if photo:
        db.session.delete(photo)
        db.session.commit()
        return "Ok", 200
    else:
        return "Photo not found", 404
