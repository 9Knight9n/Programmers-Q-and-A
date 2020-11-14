from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
from PIL import Image

class Topic(models.Model):
    TOPIC_CHOICES = (
        ('app', 'app'),
        ('os', 'os'),
        ('pl', 'pl'),
    )

    selectedTopic = models.CharField(max_length=3, choices=TOPIC_CHOICES)

    # def __str__(self):
    # return self.title


class App(models.Model):
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    appLink = models.URLField(blank=True)
    appDescription = models.CharField(max_length=100)


class Os(models.Model):
    OS_CHOICES = ()
    SUBOS_CHOICES = ()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    selectedOs = models.CharField(max_length=3, choices=OS_CHOICES)
    selectedSubOs = models.CharField(max_length=3, choices=SUBOS_CHOICES)
    osLink = models.URLField(blank=True)
    osDescription = models.CharField(max_length=100)


class Pl(models.Model):
    PL_CHOICES = ()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    selectedPl = models.CharField(max_length=3, choices=PL_CHOICES)
    plLink = models.URLField(blank=True)
    plDescription = models.CharField(max_length=100)


class CreateChatroom(models.Model):
    chatroomAvatar = models.ImageField(upload_to= "images")
    chatroomName = models.CharField(max_length=100)

    def get_absolute_url(self):
        return reverse('topic-detail', kwargs={'pk': self.pk})

    def save(self, *args, **kwargs):
        """ Saves profile and resizes image """

        super().save()

        img = Image.open(self.chatroomAvatar.path)
        if img.height > 300 or img.width > 300:
            img.thumbnail((300, 300))
            img.save(self.chatroomAvatar.path)