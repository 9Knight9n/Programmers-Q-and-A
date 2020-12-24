from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from registeration.models import User
from chatroom.models import Chatroom
from .serializer import JoinSerializer


@api_view(['POST'])
def Join(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=request.data['chatroomId'])
    user = User.objects.get(id=data['id'][0])
    if list(user) == []:
        user = user[0]
        serializer = JoinSerializer(user)
        return Response(serializer.data)
        Topic.User_set.add(user)
    return Response({'message': 'User found'})


@api_view(['POST'])
def show_Users(request):
    Users = User.objects.all()
    data = []
    for i in range(len(Users)):
        # data.append(ChatroomSerializer(chatrooms[i]))
        data.append({'id': Users[i].id, 'name': Users[i]}.username)
        print(Users[i].chatroomAvatar)
        image = open(str(Users[i].chatroomAvatar), 'r').read()
        data[i]['Base64'] = image
    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def join(request):
    data = dict(request.POST)
    user = User.objects.filter(id=data['owner'][0])
    Topic = data["selectedTopic"][0]
    chatroom = Chatroom.objects.filter(id=request.data['chatroomId'])
    user = User.objects.get(id=data['id'][0])
    serializer = PersonalInfoSerializer(user)
    return Response(serializer.data)
    # my_group = Group.objects.get(name='my_group_name')
    Topic.User_set.add(user)
    serializer = InterestsInfoSerializer(user)
    data = serializer.data
    users = User.objects.all()


@api_view(['POST'])
def join(request):
    data = dict(request.POST)
    user = User.objects.filter(id=data['owner'][0])
    Topic = data["selectedTopic"][0]
    # my_group = Group.objects.get(name='my_group_name')
    Topic.User_set.add(user)


@api_view(['POST', ])
@permission_classes([])
def ShowChatroomProfile(request):
    chatroom = Chatroom.objects.filter(id=request.data['chatroomId'])
    if list(chatroom) != []:
        chatroom = chatroom[0]
        serializer = ShowUChatroomProfileSerializer(chatroom)
        data = serializer.data
        filename = 'media/chatroom/image/' + str(chatroom.id) + '.txt'
        data['chatroom_profile_image'] = open(filename, 'rb').read()
        data['chatroomLink'] = 'http://127.0.0.1:8000/ShowChatroomByLink/chatroom' + str(chatroom.id) + '/'
        data['topicLink'] = chatroom.Link
        if data['selectedTopic'] == "PL":
            data['selectedTopic'] = "Programing Language(" + chatroom.selected + ")"
        elif data['selectedTopic'] == "App":
            data['selectedTopic'] = "Application(" + chatroom.selected + ")"
        elif data['selectedTopic'] == "OS":
            data['selectedTopic'] = "Operating System(" + chatroom.selected + ")"
        return Response(data)

    return Response({'message': 'Chatroom not found'})
