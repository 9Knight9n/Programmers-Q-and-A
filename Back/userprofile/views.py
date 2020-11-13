from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response


from registeration.models import User
from .serializer import (PersonalInfoSerializer,
)

@api_view(['GET' , ])
def show_personal_info(request):
    if request.method == 'GET':
        data = dict(request.POST)
        user = User.objects.get(id=data['id'][0])
        serializer = PersonalInfoSerializer(user)
        return Response(serializer.data) 

@api_view(['POST' , ])
def get_personal_info(request):
    if request.method == 'POST':
        data = dict(request.POST)
        print(data)
        user = User.objects.get(id=request.data['id'][0])
        user.first_name = data['first_name'][0]
        user.last_name = data['last_name'][0]
        if list(User.objects.filter(username=data['username'][0])) == []:
            user.username = data['username'][0]
        else:
            return Response({'message': 'This username already exist'} , status=status.HTTP_302_FOUND)

        if list(User.objects.filter(email=data['email'][0])) == []:
            user.email = data['email'][0]
        else:
            return Response({'message': 'This email already exist'} , status=status.HTTP_302_FOUND)
        user.save()
        serializer = PersonalInfoSerializer(user)
        return Response(serializer.data , status=status.HTTP_200_OK)

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

