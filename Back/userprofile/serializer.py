from rest_framework import serializers
from .models import intrestedIn
from registeration.models import User

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id' , 'first_name', 'last_name', 'username' , 'email']

class ChatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id' , 'user', 'parent_text', 'text' , 'time']

class ChatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id' , 'user', 'parent_text', 'text' , 'time']

class ChatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id' , 'user', 'parent_text', 'text' , 'time']