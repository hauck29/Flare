from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    u1 = User(
        username='Demo', email='demo@aa.io', password='password')
    u2 = User(
        username='RedOne', email='RedOne@mail.com', password='password')
    u3 = User(
        username='RedTwo', email='RedTwo@mail.com', password='password')
    u4 = User(
        username='RedThree', email='RedThree@mail.com', password='password')
    u5 = User(
        username='RedFour', email='RedFour@mail.com', password='password')
    u6 = User(
        username='GoldOne', email='GolOne@mail.com', password='password')
    u7 = User(
        username='GoldTwo', email='GoldTwos@mail.com', password='password')
    u8 = User(
        username='GoldThree', email='GoldThree@mail.com', password='password')
    u9 = User(
        username='GoldFour', email='GoldFour@mail.com', password='password')

    db.session.add(u1)
    db.session.add(u2)
    db.session.add(u3)
    db.session.add(u4)
    db.session.add(u5)
    db.session.add(u6)
    db.session.add(u7)
    db.session.add(u8)
    db.session.add(u9)



    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
