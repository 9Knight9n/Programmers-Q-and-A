
from django.db import models
from registeration.models import User
from chatroom.models import Chatroom
import datetime
# Create your models here.
class Question(models.Model):
    user = models.ForeignKey(User)
    chatroom = models.ForeignKey(Chatroom)
    text = models.TextField()
    time = models.DateTimeField(default=datetime.datetime.now())
    file = models.FileField(upload_to='question/file')
    isAnswered = models.BooleanField(default=False)
    commonQuestion = models.IntegerField(default=0)

class Answer(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    question = models.ForeignKey(Question , on_delete=models.CASCADE)
    parent_text = models.ForeignKey('self' , on_delete=models.CASCADE , null=True)
    text = models.TextField()
    time = models.DateTimeField(default=datetime.datetime.now())

#'question feilds : owner — time — linkOfFile — picture — text — chatroom — IsAnswered -- CommonQuestion'
                                                 #'?'



