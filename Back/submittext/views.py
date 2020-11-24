from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import QuestionSerializer
from .models import Answer , Question
from chatroom.models import Chatroom

@api_view(['GET' , ])
def ShowQuestion(request):
    chatroom = Chatroom.objects.filter(id=request.data['ChatroomID'])
    if list(chatroom) != []:
        questions = Question.objects.filter(chatroom=chatroom[0])
        data_list = []
        for i in questions:
            username = i.user.username
            serializer = QuestionSerializer(i)
            data = serializer.data
            data['user'] = username
            data['file'] = 'http://127.0.0.1:8000' + data['file']
            data_list.append(data)
        return Response(data_list)
    return Response({'message' : 'Chatroom not found'})

@api_view(['POST' , ])
def AddQuestion(request):
    pass