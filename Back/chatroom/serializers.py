from rest_framework import serializers
from .models import Chatroom

class ShowUChatroomProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = ['selectedTopic', 'chatroomAvatar', 'chatroomName', 'Description']