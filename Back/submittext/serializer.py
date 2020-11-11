from rest_framework import serializers
from .models import ChatText


class ChatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['id' , 'user', 'parent_text', 'text' , 'time']

class AddChatSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        chat = ChatText(user=validated_data['user'] , parent_text=validated_data['parent_text'] , text=validated_data['text'])
        chat.save()
        return chat

    class Meta:
        model = ChatText
        fields = ('user', 'parent_text', 'text')