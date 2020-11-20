
from django.db import models
from registeration.models import User
import datetime
# Create your models here.
class Question(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    text = models.TextField()
    time = models.DateTimeField(default=datetime.datetime.now())

class Answer(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    question = models.ForeignKey(Question , on_delete=models.CASCADE)
    parent_text = models.ForeignKey('self' , on_delete=models.CASCADE , null=True)
    text = models.TextField()
    time = models.DateTimeField(default=datetime.datetime.now())



