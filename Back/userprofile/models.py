from django.db import models
from registeration.models import User

class intrestedIn(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    field = models.TextField(max_length=20)
