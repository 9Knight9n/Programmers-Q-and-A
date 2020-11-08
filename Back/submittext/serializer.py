from rest_framework import serializers
from .models import ChatText


class ChatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['id' , 'user', 'parent_text', 'text' , 'time']