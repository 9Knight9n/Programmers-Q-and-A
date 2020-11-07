from rest_framework import serializers
from .models import ChatText


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatText
        fields = ['id', 'name', 'user']