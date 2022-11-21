"""remove discord user properties

Revision ID: b23ec080ecb7
Revises: 0d4c7cf3da6d
Create Date: 2022-11-21 17:52:32.623111+00:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b23ec080ecb7'
down_revision = '0d4c7cf3da6d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('discord_id_idx', table_name='users')
    op.drop_constraint('one_discord_account', 'users', type_='unique')
    op.drop_column('users', 'discord_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('discord_id', sa.VARCHAR(length=64), autoincrement=False, nullable=True))
    op.create_unique_constraint('one_discord_account', 'users', ['discord_id'])
    op.create_index('discord_id_idx', 'users', ['discord_id'], unique=False)
    # ### end Alembic commands ###