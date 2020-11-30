from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from registeration.models import User
from .models import Chatroom
from submittext.models import Chatroom_User
from .serializers import ShowUChatroomProfileSerializer


@api_view(['POST'])
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
        if "Base64" in request.data.keys() :
            base64=data['Base64'][0] 
            newsrc = open('media/chatroom/image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(base64)
            newsrc.close()
        else :
            src = open('media/chatroom/image/default.txt', 'r')
            default = src.read()
            src.close()
            newsrc = open('media/chatroom/image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(default)
            newsrc.close()
        
        chatroom.chatroomAvatar = 'media/chatroom/image/' + str(chatroom.id) + '.txt'
        chatroom.save()
        print(chatroom.chatroomAvatar)
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
        if "Base64" in request.data.keys() :
            base64=data['Base64'][0] 
            newsrc = open('media/chatroom/image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(base64)
            newsrc.close()
        else :
            src = open('media/chatroom/image/default.txt', 'r')
            default = src.read()
            src.close()
            newsrc = open('media/chatroom/image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(default)
            newsrc.close()
        
        chatroom.chatroomAvatar = 'media/chatroom/image/' + str(chatroom.id) + '.txt'
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
        if "Base64" in request.data.keys() :
            base64=data['Base64'][0] 
            newsrc = open('media/chatroom/image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(base64)
            newsrc.close()
        else :
            src = open('media/chatroom/image/default.txt', 'r')
            default = src.read()
            src.close()
            newsrc = open('media/chatroom/image/' + str(chatroom.id) + '.txt', 'a')
            newsrc.write(default)
            newsrc.close()
        
        chatroom.chatroomAvatar = 'media/chatroom/image/' + str(chatroom.id) + '.txt'
        chatroom.save()
        user[0].numberOfChatrooms += 1
        user[0].save()
        chatroom_user = Chatroom_User.objects.create(user=user[0] , chatroom=chatroom)
        return Response({'message': 'New chatroom created'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def show_chatrooms(request):
    chatrooms = Chatroom.objects.all()
    data = []
    for i in range(len(chatrooms)):
        # data.append(ChatroomSerializer(chatrooms[i]))
        data.append({'id':chatrooms[i].id,'name':chatrooms[i].chatroomName})
        print(chatrooms[i].chatroomAvatar)
        image = open('media/' + str(chatrooms[i].chatroomAvatar), 'r').read()
        data[i]['Base64'] = image
    return Response(data , status=status.HTTP_200_OK)


@api_view(['GET', ])
def ShowChatroomProfile(request):
    chatroom = Chatroom.objects.filter(chatroomName=request.data['chatroomName'])
    if list(chatroom) != []:
        chatroom = chatroom[0]
        serializer = ShowUChatroomProfileSerializer(chatroom)
        data = serializer.data
        filename = 'media/chatroom/image/' + str(chatroom.id) + '.txt'
        data['chatroom_profile_image'] = open(filename, 'rb').read()
        data['chatroomLink'] = 'http://127.0.0.1:8000/' + str(chatroom) + '/'
        if data['selectedTopic'] == "PL":
            data['selectedTopic'] = "Programing Language(" + chatroom.selected + ")" 
        elif data['selectedTopic'] == "App":
            data['selectedTopic'] = "Application(" + chatroom.selected + ")"
        elif data['selectedTopic'] == "OS":
            data['selectedTopic'] = "Operating System(" + chatroom.selected + ")"
        return Response(data)
    return Response({'message': 'Chatroom not found'})

@api_view(['GET', ])
def ShowChatroomByLink(request , chatroom_id):
    print(chatroom_id)
    return Response({'chatroom_id':chatroom_id})

