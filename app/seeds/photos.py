from app.models import db, Photo


def seed_photos():

    photo1 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=1, caption='This is a lovely blue bird')
    photo2 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=2, caption='This is a lovely blue bird')
    photo3 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=2, caption='This is a lovely blue bird')
    photo4 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=3, caption='This is a lovely blue bird')
    photo5 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=4, caption='This is a lovely blue bird')
    photo6 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=5, caption='This is a lovely blue bird')
    photo7 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=6, caption='This is a lovely blue bird')
    photo8 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=7, caption='This is a lovely blue bird')
    photo9 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=8, caption='This is a lovely blue bird')
    photo10 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=9, caption='This is a lovely blue bird')
    photo11 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=9, caption='This is a lovely blue bird')

    db.session.add(photo1)
    db.session.add(photo2)
    db.session.add(photo3)
    db.session.add(photo4)
    db.session.add(photo5)
    db.session.add(photo6)
    db.session.add(photo7)
    db.session.add(photo8)
    db.session.add(photo9)
    db.session.add(photo10)
    db.session.add(photo11)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities


def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
