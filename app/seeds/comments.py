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
        content='CN12'
    )
    comment13 = Comment(
        user_id=2,
        content='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    )
    comment14 = Comment(
        user_id=5,
        content='Et harum quidem rerum facilis est et expedita distinctio.'
    )
    comment15 = Comment(
        user_id=5,
        content='Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
    )
    comment16 = Comment(
        user_id=5,
        content='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    )
    comment17 = Comment(
        user_id=5,
        content='Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
    )
    comment18 = Comment(
        user_id=5,
        content='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    )
    comment19 = Comment(
        user_id=5,
        content='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
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
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
