from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
import datetime

from .serializer import QuestionSerializer , AnswerSerializer , ShowUserProfileSerializer
from .models import Answer , Question , Chatroom_User , User_Question , User_Answer
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
                data['userid'] = 'no id'
            else:
                user = i.user
                data['user'] = user.username
                data['userid'] = user.id
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
                data['userid'] = 'no id'
            else:
                user = i.user
                data['user'] = user.username
                data['userid'] = user.id
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
    searchText = request.data["searchText"]
    chatroom_value_list = []
    number_of_chatroom = 0
    for chatroom in Chatroom.objects.all():
        chatroom_value_list.append([chatroom , 0])
        number_of_chatroom += 1
        
        for question in Question.objects.filter(chatroom=chatroom):
            chatroom_value_list[-1][1] += calculateSearchOrder(searchText , question.text ,0)

    chatroom_value_list = Sort(chatroom_value_list)
    if number_of_chatroom > 10:
        chatroom_value_list = chatroom_value_list[:10]
    data_list = []
    for chatroom in chatroom_value_list:
        data = {}
        data['chatroom_id'] = chatroom[0].id
        data['chatroom_name'] = chatroom[0].chatroomName
        data_list.append(data)

    return Response(data_list)


@api_view(['POST'])
def AddQuestion(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=data['chatroom'][0])
    user = User.objects.filter(id=request.data['user_id'])
    if list(user) != []:
        question = Question.objects.create(
            user=user[0],
            chatroom=chatroom[0],
            text=data['text'][0],
            time=datetime.datetime.now().ctime(),
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
    user = User.objects.filter(id=request.data['user_id'])
    if list(user) != []:
        answer = Answer.objects.create(
            user=user[0],
            question=question[0],
            text=data['text'][0],
            time=datetime.datetime.now().ctime(),
        )
        if 'file' in request.FILES.keys():
            answer.file = request.FILES['file']
        answer.save()
        return Response({'message': 'New answer created'}, status=status.HTTP_201_CREATED)
    return Response({'message': 'User not found'})


def EditQuestion(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=data['chatroom'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    question = Question.objects.filter(id=data['id'] , user=user[0] , chatroom=chatroom[0])
    if list(question) != []:
        if 'text' in data.keys():
            question[0].text = data['text'][0]
        if 'isAnswered' in data.keys():
            question[0].isAnswered = data['isAnswered']
        if 'file' in request.FILES.keys():
            question[0].isAnswered = request.FILES['file']
        return Response({'message':'edit complete'})
    else:
        return Response({'message':'you can`t edit'})

def DeleteQuestion(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=data['chatroom'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    question = Question.objects.filter(id=data['id'] , user=user[0] , chatroom=chatroom[0])
    if list(question) != []:
        question.delete()
        return Response({'message':'delete complete'})
    else:
        return Response({'message':'you can`t delete'})

def CommonQuestion(request):
    data = dict(request.POST)
    question = Question.objects.filter(id=data['question_id'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    user_question = User_Question.objects.filter(user=user[0] , question=question[0])
    if list(user_question) != []:
        user_question.delete()
        question[0].commonQuestion -= 1
    else:
        user_question = User_Question.objects.create(user=user[0] , question=question[0])
        question[0].commonQuestion += 1
    return Response({'message':'done it'})

def ShowCommonQuestion(request):
    data = dict(request.POST)
    question = Question.objects.filter(id=data['question_id'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    user_question = User_Question.objects.filter(user=user[0] , question=question[0])
    if list(user_question) != []:
        return Response({'message': False})
    else:
        return Response({'message': True})


def EditAnswer(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=data['chatroom'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    answer = Answer.objects.filter(id=data['id'] , user=user[0] , chatroom=chatroom[0])
    if list(answer) != []:
        if 'text' in data.keys():
            answer[0].text = data['text'][0]
        if 'isAccepted' in data.keys():
            answer[0].isAccepted = data['isAccepted']
        if 'file' in request.FILES.keys():
            question[0].isAnswered = request.FILES['file']
        return Response({'message':'edit complete'})
    else:
        return Response({'message':'you can`t edit'})

def DeleteAnswer(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=data['chatroom'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    answer = Answer.objects.filter(id=data['id'] , user=user[0] , chatroom=chatroom[0])
    if list(answer) != []:
        answer.delete()
        return Response({'message':'delete complete'})
    else:
        return Response({'message':'you can`t delete'})

def VoteAnswer(request):
    data = dict(request.POST)
    answer = Answer.objects.filter(id=data['answer_id'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    user_answer = User_Answer.objects.filter(user=user[0] , answer=answer[0])
    if list(user_answer) != []:
        if user_answer.isVoted == data['vote']:
            return Response({'message':'this user can not do that'})
        else:
            user_answer.isVoted = data['vote']
            answer[0].vote += data['vote']
    else:
        user_answer = User_Question.objects.create(user=user[0] , answer=answer[0] , isVoted=data['vote'])
        answer[0].vote += data['vote']
    return Response({'message':'done it'})

def ShowVoteAnswer(request):
    data = dict(request.POST)
    answer = Answer.objects.filter(id=data['answer_id'][0])
    user = User.objects.filter(id=request.data['user_id'][0])
    user_answer = User_Answer.objects.filter(user=user[0] , answer=answer[0])
    if list(user_answer) != []:
        return Response({'message': user_answer.isVoted})
    else:
        return Response({'message':0})