"""empty message

Revision ID: 33368ea99e51
Revises: 3cf6a2737dbb
Create Date: 2021-12-14 15:56:10.225348

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '33368ea99e51'
down_revision = '3cf6a2737dbb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(None, 'comments', 'photos', ['photo_id'], ['id'])
    op.add_column('users', sa.Column('createdAt', sa.DateTime(), nullable=False))
    op.add_column('users', sa.Column('updatedAt', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'updatedAt')
    op.drop_column('users', 'createdAt')
    op.drop_constraint(None, 'comments', type_='foreignkey')
    # ### end Alembic commands ###
