from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import ChatTextSerializer
from .models import ChatText

@api_view(['GET' , ])
def send_all_text(request):
    if request.method == 'GET':
        chattext = ChatText.objects.all()
        serializer = ChatTextSerializer(chattext)
        return Response(serializer.data)

def get_text(request):
    pass