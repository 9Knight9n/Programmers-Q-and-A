from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from registeration.models import User
from chatroom.models import Chatroom
from .models import Chatroom_User
from .serializer import JoinSerializer


@api_view(['POST'])
@permission_classes([])
def Join(request):
    data = dict(request.POST)
    chatroom = Chatroom.objects.filter(id=request.data['chatroomId'])
    user = User.objects.filter(id=data['id'][0])
    if list(user) == [] or list(chatroom) == []:
        return Response({'message': 'User or chatroom not found'})
    chatroom_user = Chatroom_User.objects.filter(user=user[0], chatroom=chatroom[0])
    if not list(chatroom_user):
        user = user
        chatroom = chatroom
        Chatroom_User.user.add(user)
        serializer = JoinSerializer(user)
        return Response(serializer.data)
    return Response({'message': 'User found'})


@api_view(['POST'])
@permission_classes([])
def show_Users(request):
    Users = User.objects.all()
    data = []
    for i in range(len(Users)):
        # data.append(ChatroomSerializer(chatrooms[i]))
        data.append({'id': Users[i].id, 'name': Users[i]}.username)
        print(Users[i].chatroomAvatar)
        image = open(str(Users[i].profile_picture), 'r').read()
        data[i]['Base64'] = image
    return Response(data, status=status.HTTP_200_OK)
