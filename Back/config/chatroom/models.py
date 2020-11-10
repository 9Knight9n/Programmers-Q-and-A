from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class Topic(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)


def get_absolute_url(self):
    return reverse('topic-detail', kwargs={'pk': self.pk})


def __str__(self):
    return self.title
