from rest_framework import serializers
from .models import Answer , Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id' , 'user', 'chatroom', 'text' , 'time' , 'file' , 'isAnswered' , 'commonQuestion']

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['id' , 'user', 'question' ,'text' , 'time' , 'file' , 'positiveVote' , 'negativeVote']