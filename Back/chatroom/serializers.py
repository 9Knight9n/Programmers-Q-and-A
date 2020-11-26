from rest_framework import serializers
from .models import Chatroom

class ShowUChatroomProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ['owner', 'selectedTopic', 'chatroomAvatar', 'chatroomName', 'Link', 'Description', 'selectedSub', 'selected']


class ChatroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ('owner', 'selectedTopic' , 'chatroomName', 'Link', 'Description', 'selected')


class Osserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chatroom
        fields = ('owner', 'selectedTopic', 'chatroomAvatar', 'chatroomName', 'Link', 'Description', 'selectedSub', 'selected')


class Appserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chatroom
        fields = ('owner', 'selectedTopic', 'chatroomAvatar', 'chatroomName', 'Link', 'Description')
