from app.models import db, Photo


def seed_photos():

    photo1 = Photo(
        url='https://media.istockphoto.com/photos/funny-burrowing-owl-athene-cunicularia-picture-id964611070?b=1&k=20&m=964611070&s=170667a&w=0&h=9Mliv2bAo8vOjaDRAbDj6_sGmHSkKmjn9gN-9RcFRI0=',
        user_id=1, caption='Owl One')
    photo2 = Photo(
        url='https://www.freegreatpicture.com/files/151/3218-high-resolution-pictures-of-birds.jpg',
        user_id=2, caption='Cardinal')
    photo3 = Photo(
        url='https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHxlbnwwfHwwfHw%3D&w=1000&q=80',
        user_id=2, caption='Singin Loud')
    photo4 = Photo(
        url='https://c4.wallpaperflare.com/wallpaper/427/978/508/bird-high-resolution-widescreen-wallpaper-preview.jpg',
        user_id=3, caption='Baby Bird')
    photo5 = Photo(
        url='https://www.birdphotos.com/photos/files/bluejay_detail.jpg',
        user_id=4, caption='Close Up!!')
    photo6 = Photo(
        url='https://i.pinimg.com/originals/06/94/34/0694345eb07a1270e44df7beafa58c62.jpg',
        user_id=5, caption='Hummingbird')
    photo7 = Photo(
        url='https://www.teahub.io/photos/full/177-1770282_bird-high-resolution.jpg',
        user_id=6, caption='Gold Finch')
    photo8 = Photo(
        url='https://dattravel.com/book/wp-content/uploads/birds-white-eared-thrush-animal-flowers-cherry-spring-montana-trees-bird-high-resolution-736x552-e1472843467425.jpg',
        user_id=7, caption='Finch on Cherry Blossom')
    photo9 = Photo(
        url='https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        user_id=8, caption='Orange Breasted Baby')
    photo10 = Photo(
        url='https://www.freegreatpicture.com/files/151/1898-high-resolution-pictures-of-birds.jpg',
        user_id=9, caption='This is a lovely blue bird')
    photo11 = Photo(
        url='https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjBiaXJkfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        user_id=9, caption='Come at me BRO!')

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
