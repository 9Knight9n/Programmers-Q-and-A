from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import datetime

from .serializer import QuestionSerializer, AnswerSerializer, ShowUserProfileSerializer
from .models import Answer, Question, Chatroom_User
from chatroom.models import Chatroom
from registeration.models import User


@api_view(['GET', ])
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
    return Response({'message': 'Chatroom not found'})


@api_view(['GET', ])
def ShowAnswer(request):
    question = Question.objects.filter(id=request.data['QuestionID'])
    if list(question) != []:
        answers = Answer.objects.filter(question=question[0]).order_by('isAccepted', 'vote')
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
    return Response({'message': 'Question not found'})


@api_view(['GET', ])
def ShowUserProfile(request):
    user = User.objects.filter(username=request.data['username'])
    if list(user) != []:
        user = user[0]
        serializer = ShowUserProfileSerializer(user)
        data = serializer.data
        numberOfChatrooms = Chatroom_User.objects.filter(user=user.id).count()
        data['numberOfChatrooms'] = numberOfChatrooms
        filename = 'media/profile/image/' + str(user.id) + '.txt'
        data['user_profile_image'] = open(filename, 'rb').read()
        return Response(data)
    return Response({'message': 'User not found'})


@api_view(['POST', ])
def Search(request):
    pass


# document :
# realtime sreach (only on chatrooms)
# advanced filter :
# chatroom
# period of time
# chatroom with more user
# question with true answer

@api_view(['POST'])
def AddQuestion(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=data['chatroom'][0])
    user = User.objects.filter(username=request.data['username'])
    if list(user) != []:
        question = Question.objects.create(
            user=user[0],
            chatroom=chatroom[0],
            text=data['text'][0],
            time=datetime.datetime.now(),
        )
        if 'file' in request.FILES.keys():
            question.file = request.FILES['file']
        question.save()
        return Response({'message': 'New question created'}, status=status.HTTP_201_CREATED)
    return Response({'message': 'User not found'})


@api_view(['POST'])
def AddAnswer(request):
    data = dict(request.POST)
    question = Question.objects.filter(id=data['question'][0])
    user = User.objects.filter(username=request.data['username'])
    if list(user) != []:
        answer = Answer.objects.create(
            user=user[0],
            question=question[0],
            text=data['text'][0],
            time=datetime.datetime.now(),
        )
        if 'file' in request.FILES.keys():
            question.file = request.FILES['file']
        answer.save()
        return Response({'message': 'New answer created'}, status=status.HTTP_201_CREATED)
    return Response({'message': 'User not found'})