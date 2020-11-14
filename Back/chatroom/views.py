from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from registeration.models import User
from .models import Chatroom
from .serializers import Osserializer, Appserializer, Plserializer


@api_view(['POST'])
@permission_classes([])
def createchatroom(request):
    data = dict(request.POST)
    user = User.objects.filter(id=data['owner'][0])
    Topic = data["selectedTopic"][0]
    if Topic == "PL":
        chatroom = Chatroom.objects.create(
            owner=user[0],
            selectedTopic=data['selectedTopic'][0],
            chatroomName=data['chatroomName'][0],
            Link=data['Link'][0],
            Description=data['Description'][0],
            selected=data['selected'][0]
        )
        if 'chatroomAvatar' in request.FILES.keys():
            chatroom.chatroomAvatar = request.FILES['chatroomAvatar']
        chatroom.save()
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)
    if Topic == "OS":
        chatroom = Chatroom.objects.create(
            owner=user[0],
            selectedTopic=data['selectedTopic'][0],
            chatroomName=data['chatroomName'][0],
            Link=data['Link'][0],
            Description=data['Description'][0],
            selected=data['selected'][0],
            selectedSub=data['selectedSub'][0],
        )
        if 'chatroomAvatar' in request.FILES.keys():
            chatroom.chatroomAvatar = request.FILES['chatroomAvatar']
        chatroom.save()
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)
    if Topic == "App":
        chatroom = Chatroom.objects.create(
            owner=user[0],
            selectedTopic=data['selectedTopic'][0],
            chatroomName=data['chatroomName'][0],
            Link=data['Link'][0],
            Description=data['Description'][0],
        )
        if 'chatroomAvatar' in request.FILES.keys():
            chatroom.chatroomAvatar = request.FILES['chatroomAvatar']
        chatroom.save()
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)
