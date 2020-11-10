from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes

from .serializer import ChatTextSerializer
from .models import ChatText

@api_view(['GET' , ])
@permission_classes([])
def send_all_text(request):
    #start commit on correct way
    if request.method == 'GET':
        chattext = ChatText.objects.all()
        #serializer = ChatTextSerializer(chattext)
        return Response(chattext)

def get_text(request):
    pass