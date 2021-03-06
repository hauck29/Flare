from flask import Blueprint, request, session
from flask_login import login_required
from app.models import Photo, User, Comment
from wtforms.validators import DataRequired
from datetime import datetime
from app.models import db
from app.forms.photo_form import PhotoForm
from app.aws_s3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)


photo_routes = Blueprint('photos', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# # READ ONE PHOTO
# @photo_routes.route("/<int:id>")
# @login_required
# def get_one_photo(id):
#     photo = Photo.query.get(id)
#     if photo:
#         return photo.to_dict()
#     else:
#         return "Photo not found", 404

# READ ALL PHOTOS
@photo_routes.route('/')
def get_all_photos():
    photos = Photo.query.all()
    results_dict = {'photo': [photo.to_dict() for photo in photos]}
    if results_dict:
        return results_dict
    else:
        return 'Photos not found', 404


# POST ONE PHOTO
@photo_routes.route('/', methods=["POST"])
@login_required
def create_photo():
    form = PhotoForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if "image" not in form.data:
        return {"errors": "image required"}, 400

    image = form.data["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    photo = Photo(
        user_id=form.data['user_id'],
        url=url,
        caption=form.data['caption'],
        createdAt=datetime.now(),
        updatedAt=datetime.now(),
    )
    db.session.add(photo)
    db.session.commit()
    return photo.to_dict()

# UPDATE ONE PHOTO
@photo_routes.route("/<int:id>/", methods=["PUT"])
@login_required
def update_photo(id):
    photo = Photo.query.get(id)
    req = request.get_json()
    if photo:
        photo.caption = req
        db.session.commit()
        return photo.to_dict()
    else:
        return "Photo not found", 404

# DELETE ONE PHOTO
@photo_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_photo(id):
    photo = Photo.query.get(id)
    if photo:
        db.session.delete(photo)
        db.session.commit()
        return "Ok", 200
    else:
        return "Photo not found", 404
