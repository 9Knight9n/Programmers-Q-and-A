from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from .serializer import ChatTextSerializer , AddChatSerializer
from .models import ChatText

@api_view(['GET' , ])
def send_all_text(request):
    if request.method == 'GET':
        chattext = ChatText.objects.all()
        data = []
        for i in chattext:
            serializer = ChatTextSerializer(i)
            data.append(serializer.data)
        return Response(data)

@api_view(['POST' , ])
def get_text(request):
    if request.method == 'POST':
        serializer = AddChatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'New chat created'}, status=status.HTTP_201_CREATED)
        return Response({'message':'user with this email address not exists.'}, status=status.HTTP_400_BAD_REQUEST)