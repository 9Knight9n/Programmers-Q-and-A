from rest_framework import serializers
from .models import Answer


class ChatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id' , 'user', 'parent_text', 'text' , 'time']

class AddChatSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        chat = Answer(user=validated_data['user'] , parent_text=validated_data['parent_text'] , text=validated_data['text'])
        chat.save()
        return chat

    class Meta:
        model = Answer
        fields = ('user', 'parent_text', 'text')