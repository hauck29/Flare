from wtforms import StringField, IntegerField, FileField
from flask_wtf import FlaskForm
from wtforms.validators import DataRequired

class PhotoForm(FlaskForm):

	user_id=IntegerField("user_id", validators=[DataRequired()])
	image=FileField("image", validators=[DataRequired()])
	caption=StringField("caption")
