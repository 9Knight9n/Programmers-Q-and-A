from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from registeration.models import User
from .models import Chatroom
from .serializers import Osserializer, Appserializer, ChatroomSerializer


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
            selected=data['selected'][0]
        )
        if "Description" in request.data.keys() :
            Description=data['Description'][0]
        chatroom.save()
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)
    if Topic == "OS":
        chatroom = Chatroom.objects.create(
            owner=user[0],
            selectedTopic=data['selectedTopic'][0],
            chatroomName=data['chatroomName'][0],
            selected=data['selected'][0],
            selectedSub=data['selectedSub'][0]
        )
        if "Description" in request.data.keys() :
            Description=data['Description'][0]
        chatroom.save()
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)
    if Topic == "App":
        chatroom = Chatroom.objects.create(
            owner=user[0],
            selectedTopic=data['selectedTopic'][0],
            chatroomName=data['chatroomName'][0],
            Link=data['Link'][0]
        )
        if "Description" in request.data.keys() :
            Description=data['Description'][0]
        chatroom.save()
        if "base64" in request.data.keys() :
            base64=data['base64'][0] 
            newsrc = open('media/chatroom_image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(base64)
            newsrc.close()
        else :
            src = open('media/chatroom_image/default.txt', 'r')
            default = src.read()
            src.close()
            newsrc = open('media/chatroom_image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(default)
            newsrc.close()
        
        chatroom.chatroomAvatar = 'media/chatroom_image/' + str(chatroom.id) + '.txt'
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)

def show_chatrooms(request):
    chatrooms = Chatroom.objects.all()
    data = []
    for i in range(len(chatrooms)):
        data.append(ChatroomSerializer(chatrooms[i].data))
        image = open('media/chatroom_image/' + str(chatrooms[i].id) + '.txt', 'r').read()
        data[i]['Base64'] = image
    return Response(data , status=status.HTTP_200_OK)

