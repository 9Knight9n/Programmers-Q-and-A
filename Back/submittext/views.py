from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import QuestionSerializer , AnswerSerializer
from .models import Answer , Question
from chatroom.models import Chatroom

@api_view(['GET' , ])
def ShowQuestion(request):
    chatroom = Chatroom.objects.filter(id=request.data['ChatroomID'])
    if list(chatroom) != []:
        questions = Question.objects.filter(chatroom=chatroom[0])
        data_list = []
        for i in questions:
            user = i.user
            serializer = QuestionSerializer(i)
            data = serializer.data
            data['user'] = user.username
            data['file'] = 'http://127.0.0.1:8000' + data['file']
            filename = 'media/profile/image/' + str(user.id) + '.txt'
            data['user_profile_image'] = open(filename, 'rb').read()
            data_list.append(data)
        return Response(data_list)
    return Response({'message' : 'Chatroom not found'})

@api_view(['GET' , ])
def ShowAnswer(request):
    question = Question.objects.filter(id=request.data['QuestionID'])
    if list(question) != []:
        answers = Answer.objects.filter(question=question[0]).order_by('isAccepted' , 'positiveVote')
        answers = answers[::-1]
        data_list = []
        for i in answers:
            user = i.user
            serializer = AnswerSerializer(i)
            data = serializer.data
            data['user'] = user.username
            data['file'] = 'http://127.0.0.1:8000' + data['file']
            filename = 'media/profile/image/' + str(user.id) + '.txt'
            data['user_profile_image'] = open(filename, 'rb').read()
            data_list.append(data)
        return Response(data_list)
    return Response({'message' : 'Question not found'})

@api_view(['POST' , ])
def AddQuestion(request):
    pass