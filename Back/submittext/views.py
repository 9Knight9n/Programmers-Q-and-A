from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q

from .serializer import QuestionSerializer , AnswerSerializer , ShowUserProfileSerializer
from .models import Answer , Question , Chatroom_User
from chatroom.models import Chatroom
from registeration.models import User

@api_view(['POST' , ])
def ShowQuestion(request):
    chatroom = Chatroom.objects.filter(id=request.data['ChatroomID'])
    if list(chatroom) != []:
        questions = Question.objects.filter(chatroom=chatroom[0])
        data_list = []
        for i in questions:
            serializer = QuestionSerializer(i)
            data = serializer.data
            data['file'] = 'http://127.0.0.1:8000' + data['file']
            if i.user == None:
                data['user'] = 'User is not exist'
                filename = 'media/profile/image/default.txt'
                data['user_profile_image'] = open(filename, 'rb').read()  
            else:
                user = i.user
                data['user'] = user.username
                filename = 'media/profile/image/' + str(user.id) + '.txt'
                data['user_profile_image'] = open(filename, 'rb').read()
            data_list.append(data)
        return Response(data_list)
    return Response({'message' : 'Chatroom not found'})

@api_view(['GET' , ])
def ShowAnswer(request):
    question = Question.objects.filter(id=request.data['QuestionID'])
    if list(question) != []:
        answers = Answer.objects.filter(question=question[0]).order_by('isAccepted' , 'vote')
        answers = answers[::-1]
        data_list = []
        for i in answers:
            serializer = AnswerSerializer(i)
            data = serializer.data
            data['file'] = 'http://127.0.0.1:8000' + data['file']
            if i.user == None:
                data['user'] = 'User is not exist'
                filename = 'media/profile/image/default.txt'
                data['user_profile_image'] = open(filename, 'rb').read()  
            else:
                user = i.user
                data['user'] = user.username
                filename = 'media/profile/image/' + str(user.id) + '.txt'
                data['user_profile_image'] = open(filename, 'rb').read()
            data_list.append(data)
        return Response(data_list)
    return Response({'message' : 'Question not found'})

@api_view(['GET' , ])
def ShowUserProfile(request):
    user = User.objects.filter(username=request.data['username'])
    if list(user) != []:
        user = user[0]
        serializer = ShowUserProfileSerializer(user)
        data = serializer.data
        filename = 'media/profile/image/' + str(user.id) + '.txt'
        data['user_profile_image'] = open(filename, 'rb').read()
        return Response(data)
    return Response({'message' : 'User not found'})

def calculateSearchOrder(searchText , QuestionText , chatroomValue):
    value = chatroomValue * 0.0001
    searchTextList = searchText.split()
    for word in searchTextList:
        if word in QuestionText:
            value += 1
    return value

def Sort(sub_li): 
    sub_li.sort(key = lambda x: x[1]) 
    return sub_li[::-1]

@api_view(['GET' , ])
def GeneralSearch(request):
    # advance filter
    query = Q()
    if 'UpPeriod' in request.data.keys():
        # filter time
        pass
    if 'DownPeriod' in request.data.keys():
        # filter time
        pass
    if 'isAnswered' in request.data.keys():
        query = query & Q(isAnswered=True)
    if 'chatroomID' in request.data.keys():
        query = query & Q(chatroom=request.data['chatroomID'])
    chatroomValue = 0
    if 'chatroomMember' in request.data.keys():
        chatroomValue = 1
    queryset = Question.objects.filter(query)
    print(queryset)
    valuelist = []
    searchText = request.data["searchText"]
    for q in range(len(queryset)):
        if queryset[q].chatroom != None:
            numberOfUser = queryset[q].chatroom.numberOfUser
        else:
            numberOfUser = 0
        valuelist.append([q , calculateSearchOrder(searchText , queryset[q].text , numberOfUser * chatroomValue)])
    valuelist = Sort(valuelist)
    data_list = []
    for i in valuelist:
        if i[1] > 0:
            data = QuestionSerializer(queryset[i[0]]).data
            if queryset[i[0]].user != None:
                data['user'] = queryset[i[0]].user.username
            else:
                data['user'] = 'user does not exist'
            data_list.append(data)
    return Response(data_list)

#document :
    # realtime sreach (only on chatrooms)
    # advanced filter :
        # chatroom
        # period of time
        # chatroom with more user
        # question with true answer

@api_view(['GET' , ])
def SeggestionChatroomSreach(request):
    pass
