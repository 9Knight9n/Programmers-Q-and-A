
from django.db import models
from registeration.models import User
import datetime
# Create your models here.
class ChatText(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    parent_text = models.ForeignKey('self' , on_delete=models.CASCADE , null=True)
    text = models.TextField()
    time = models.DateTimeField(default=datetime.datetime.now())