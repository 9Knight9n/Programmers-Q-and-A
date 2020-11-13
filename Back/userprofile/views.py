from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response


from registeration.models import User
from .serializer import (ShowPersonalInfoSerializer,
)

@api_view(['GET' , ])
def show_personal_info(request):
    if request.method == 'GET':
        data = dict(request.POST)
        print(data)
        personal_info = User.objects.get(id=request.data['id'])
        serializer = ShowPersonalInfoSerializer(personal_info)
        return Response(serializer.data) 

@api_view(['POST' , ])
def get_personal_info(request):
    pass

@api_view(['GET' , ])
def show_activity(request):
    pass

@api_view(['GET' , ])
def show_interests(request):
    pass

@api_view(['GET' , ])
def add_interests(request):
    pass

@api_view(['GET' , ])
def show_picture_profile(request):
    pass

@api_view(['POST' , ])
def edit_picture_profile(request):
    pass

@api_view(['GET' , ])
def show_CV(request):
    pass

@api_view(['POST' , ])
def edit_CV(request):
    pass

