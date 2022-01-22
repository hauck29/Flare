# from app.models import db, PhotoComment


# def seed_photoComments():

#     PhotoComment1 = PhotoComment(
#         user_id=1,
#         photo_id=1,
#         pcontent='PhotoComment for Owl One'
#     )
#     PhotoComment2 = PhotoComment(
#         user_id=2,
#         photo_id=1,
#         pcontent='TWO PhotoComment'
#     )
#     PhotoComment3 = PhotoComment(
#         user_id=3,
#         photo_id=1,
#         pcontent='PhotoComment THREE'
#     )
#     PhotoComment4 = PhotoComment(
#         user_id=4,
#         photo_id=1,
#         pcontent='PhotoComment 4'
#     )
#     PhotoComment5 = PhotoComment(
#         user_id=5,
#         photo_id=2,
#         pcontent='PhotoComment fIfThHhH!'
#     )
#     PhotoComment6 = PhotoComment(
#         user_id=5,
#         photo_id=3,
#         pcontent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '

#     )
#     PhotoComment7 = PhotoComment(
#         user_id=5,
#         photo_id=1,
#         pcontent='Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Diam '

#     )
#     PhotoComment8 = PhotoComment(
#         user_id=5,
#         photo_id=1,
#         pcontent='Magna ac placerat vestibulum lectus mauris ultrices. Id neque aliquam vestibulum morbi blandit '

#     )
#     PhotoComment9 = PhotoComment(
#         user_id=5,
#         photo_id=4,
#         pcontent='Arcu risus quis varius quam quisque id diam vel. '

#     )
#     PhotoComment10 = PhotoComment(
#         user_id=5,
#         photo_id=4,
#         pcontent='Eget mi proin sed libero enim sed faucibus. Ac orci '
#     )
#     PhotoComment11 = PhotoComment(
#         user_id=5,
#         photo_id=4,
#         pcontent='Eleventh PhotoComment'
#     )
#     PhotoComment12 = PhotoComment(
#         user_id=5,
#         photo_id=4,
#         pcontent='PhotoComment number twelve!'
#     )

#     db.session.add(PhotoComment1)
#     db.session.add(PhotoComment5)
#     db.session.add(PhotoComment4)
#     db.session.add(PhotoComment3)
#     db.session.add(PhotoComment2)
#     db.session.add(PhotoComment6)
#     db.session.add(PhotoComment7)
#     db.session.add(PhotoComment8)
#     db.session.add(PhotoComment9)
#     db.session.add(PhotoComment10)
#     db.session.add(PhotoComment11)
#     db.session.add(PhotoComment12)

#     db.session.commit()


# def undo_photoComments():
#     db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
#     db.session.commit()
