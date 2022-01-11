from .db import db
import datetime

class PhotoComment(db.Model):
    __tablename__ = 'photoComments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    photo_id = db.Column(db.Integer, db.ForeignKey('photos.id'), nullable=False)
    pcontent = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)

    user = db.relationship('User', back_populates='photoComments')
    photos = db.relationship('Photo', back_populates='photoComments')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'photo_id': self.photo_id,
            'pcontent': self.pcontent,
        }
