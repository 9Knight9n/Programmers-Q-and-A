from django import forms
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Topic, Os, App, Pl, CreateChatroom


class Topicserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'


class Osserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Os
        fields = '__all__'


class Appserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = App
        fields = '__all__'


class Plserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Pl
        fields = '__all__'


class CreateChatroomserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CreateChatroom
        fields = '__all__'
