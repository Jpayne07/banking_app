"""update column name limits

Revision ID: 161d4c493286
Revises: ca84ab94c8b6
Create Date: 2025-02-17 16:32:29.792702

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '161d4c493286'
down_revision = 'ca84ab94c8b6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sessions', schema=None) as batch_op:
        batch_op.drop_constraint('sessions_session_id_key', type_='unique')
        batch_op.create_unique_constraint(batch_op.f('uq_sessions_session_id'), ['session_id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sessions', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('uq_sessions_session_id'), type_='unique')
        batch_op.create_unique_constraint('sessions_session_id_key', ['session_id'])

    # ### end Alembic commands ###
