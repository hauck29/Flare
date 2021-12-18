from wtforms import StringField, IntegerField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

class PhotoForm(FlaskForm):

	user_id=IntegerField("user_id", validators=[DataRequired()])
	url=StringField("url", validators=[DataRequired()])
	caption=StringField("caption")
