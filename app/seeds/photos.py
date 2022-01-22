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

    photo12 = Photo(
        url='https://mymodernmet.com/wp/wp-content/uploads/2019/06/david-travis-bird-photography-7.jpg',
        user_id=9, caption='Jay on a pink tree')
    photo13 = Photo(
        url='https://media.istockphoto.com/photos/eastern-bluebirds-male-and-female-picture-id183412466?b=1&k=20&m=183412466&s=170667a&w=0&h=45UhLd6cQcc8fqsLPNQKz-Rgof6RflVscLCyqPFxtAE=',
        user_id=9, caption='Lovebirds')
    photo14 = Photo(
        url='https://s3.eu-west-1.amazonaws.com/prod.news.product.which.co.uk/news/wp-content/uploads/2020/07/Bird-photography-main.jpg',
        user_id=9, caption='Successful catch')
    photo15 = Photo(
        url='https://i.natgeofe.com/n/d6cdb97e-9a73-458f-8086-a52024e7c0d8/1658117_uploadsmember230167yourshot-230167-1658117jpg_mset6esrx2bzc4znl2fqeicvt7p3eflutfvvbpyjwjhzlmh4iziq_1600x1200.jpg',
        user_id=9, caption='Water takeoff')
    photo16 = Photo(
        url='https://ichef.bbci.co.uk/news/976/cpsprodpb/0646/production/_117860610_bpoty-2021-finalists-15.jpg',
        user_id=9, caption='Om nom nom nom!')
    photo17 = Photo(
        url='https://thumbor.forbes.com/thumbor/trim/0x57:1790x1104/fit-in/711x415/smart/https://specials-images.forbesimg.com/imageserve/612e3d4464dcf557704d05fb/Two-Southern-Yellow--billed-Hornbill-birds-chase-the-same-insect-in-the-air/0x0.jpg',
        user_id=9, caption='MORTAL KOMBAT')
    photo18 = Photo(
        url='https://121clicks.com/wp-content/uploads/2013/06/axel_hildebrandt_01.jpg',
        user_id=9, caption='Distracted Driving')
    photo19 = Photo(
        url='https://cdn.wallpapersafari.com/88/29/R9BuPs.jpg',
        user_id=1, caption='Not Camoflagued'
    )
    photo20 = Photo(
        url='https://images.unsplash.com/photo-1579264688258-c0ebf8c7942a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&w=1000&q=80',
        user_id=1, caption='On High Alert'
    )
    photo21 = Photo(
        url='https://wallpapermemory.com/uploads/437/owl-wallpaper-full-hd-1080p-237369.jpg',
        user_id=1, caption='Your Soul is MINE'
    )
    photo22 = Photo(
        url='https://www.hdnicewallpapers.com/Walls/Big/Owl/Beautiful_Flying_Owl.jpg',
        user_id=1, caption='Flapping'
    )
    photo23 = Photo(
        url='http://highresolution.photography/images/barred-owl-main.jpg',
        user_id=1, caption='Barred Owl just chillin'
    )
    photo24 = Photo(
        url='https://cdn.wallpapersafari.com/33/77/m9BIAe.jpg',
        user_id=1, caption='Bored Owl'
    )
    photo25 = Photo(
        url='https://wallpaperaccess.com/full/176530.jpg',
        user_id=1, caption='Haaallloooo, im bebe'
    )

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
    db.session.add(photo12)
    db.session.add(photo13)
    db.session.add(photo14)
    db.session.add(photo15)
    db.session.add(photo16)
    db.session.add(photo17)
    db.session.add(photo18)
    db.session.add(photo19)
    db.session.add(photo20)
    db.session.add(photo21)
    db.session.add(photo22)
    db.session.add(photo23)
    db.session.add(photo24)
    db.session.add(photo25)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities


def undo_photos():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
