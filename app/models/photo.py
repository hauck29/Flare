from .db import db
import datetime

class Photo(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    caption = db.Column(db.String(255))
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)

    user = db.relationship('User', back_populates='photos')
    photoComments = db.relationship('PhotoComment', back_populates='photos')

    def to_dict(self):
            return {
                'id': self.id,
                'url': self.url,
                'user_id': self.user_id,
                'caption': self.caption,
            }
