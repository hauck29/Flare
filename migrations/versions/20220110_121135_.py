"""empty message

Revision ID: 0db98ba4c35b
Revises: 
Create Date: 2022-01-10 12:11:35.404000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0db98ba4c35b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=255), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('url', sa.String(length=255), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('caption', sa.String(length=255), nullable=True),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('photoComments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('photo_id', sa.Integer(), nullable=False),
    sa.Column('pcontent', sa.String(length=255), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=False),
    sa.Column('updatedAt', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['photo_id'], ['photos.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('photoComments')
    op.drop_table('photos')
    op.drop_table('comments')
    op.drop_table('users')
    # ### end Alembic commands ###