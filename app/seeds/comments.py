from app.models import db, Comment


def seed_comments():

    comment1 = Comment(
        user_id=1,
        content='Comment for Owl One'
    )
    comment2 = Comment(
        user_id=2,
        content='TWO comment'
    )
    comment3 = Comment(
        user_id=3,
        content='Comment THREE'
    )
    comment4 = Comment(
        user_id=4,
        content='Comment 4'
    )
    comment5 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment6 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment7 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment8 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment9 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment10 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment11 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )
    comment12 = Comment(
        user_id=5,
        content='Comment fIfThHhH!'
    )

    db.session.add(comment1)
    db.session.add(comment5)
    db.session.add(comment4)
    db.session.add(comment3)
    db.session.add(comment2)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
