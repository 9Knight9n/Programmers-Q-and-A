from django.db import models
from registeration.models import User
# Create your models here.
class chat_text(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    parent_text = models.ForeignKey('self' , on_delete=models.CASCADE , null=True)
    text = models.TextField()
    