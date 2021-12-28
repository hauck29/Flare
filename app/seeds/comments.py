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
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

    )
    comment7 = Comment(
        user_id=5,
        content='Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Diam '

    )
    comment8 = Comment(
        user_id=5,
        content='Magna ac placerat vestibulum lectus mauris ultrices. Id neque aliquam vestibulum morbi blandit '

    )
    comment9 = Comment(
        user_id=5,
        content='Arcu risus quis varius quam quisque id diam vel. '

    )
    comment10 = Comment(
        user_id=5,
        content='Eget mi proin sed libero enim sed faucibus. Ac orci '
    )
    comment11 = Comment(
        user_id=5,
        content='Eleventh comment'
    )
    comment12 = Comment(
        user_id=5,
        content='Comment number twelve!'
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
