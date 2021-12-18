from app.models import db, Comment


def seed_comments():

    comment1 = Comment(
        user_id=1,
        photo_id=1,
        content='Comment for Owl One'
        )

    db.session.add(comment1)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
