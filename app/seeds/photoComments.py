from app.models import db, PhotoComment


def seed_photoComments():

    PhotoComment1 = PhotoComment(
        user_id=1,
        photo_id=1,
        content='PhotoComment for Owl One'
    )
    PhotoComment2 = PhotoComment(
        user_id=2,
        photo_id=1,
        content='TWO PhotoComment'
    )
    PhotoComment3 = PhotoComment(
        user_id=3,
        photo_id=1,
        content='PhotoComment THREE'
    )
    PhotoComment4 = PhotoComment(
        user_id=4,
        photo_id=1,
        content='PhotoComment 4'
    )
    PhotoComment5 = PhotoComment(
        user_id=5,
        photo_id=2,
        content='PhotoComment fIfThHhH!'
    )
    PhotoComment6 = PhotoComment(
        user_id=5,
        photo_id=3,
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

    )
    PhotoComment7 = PhotoComment(
        user_id=5,
        photo_id=1,
        content='Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Diam '

    )
    PhotoComment8 = PhotoComment(
        user_id=5,
        photo_id=1,
        content='Magna ac placerat vestibulum lectus mauris ultrices. Id neque aliquam vestibulum morbi blandit '

    )
    PhotoComment9 = PhotoComment(
        user_id=5,
        photo_id=4,
        content='Arcu risus quis varius quam quisque id diam vel. '

    )
    PhotoComment10 = PhotoComment(
        user_id=5,
        photo_id=4,
        content='Eget mi proin sed libero enim sed faucibus. Ac orci '
    )
    PhotoComment11 = PhotoComment(
        user_id=5,
        photo_id=4,
        content='Eleventh PhotoComment'
    )
    PhotoComment12 = PhotoComment(
        user_id=5,
        photo_id=4,
        content='PhotoComment number twelve!'
    )

    db.session.add(PhotoComment1)
    db.session.add(PhotoComment5)
    db.session.add(PhotoComment4)
    db.session.add(PhotoComment3)
    db.session.add(PhotoComment2)
    db.session.add(PhotoComment6)
    db.session.add(PhotoComment7)
    db.session.add(PhotoComment8)
    db.session.add(PhotoComment9)
    db.session.add(PhotoComment10)
    db.session.add(PhotoComment11)
    db.session.add(PhotoComment12)

    db.session.commit()


def undo_PhotoComments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
