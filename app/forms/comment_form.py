from wtforms import StringField, IntegerField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):

	user_id=IntegerField("user_id", validators=[DataRequired()])
	content=StringField("content")
