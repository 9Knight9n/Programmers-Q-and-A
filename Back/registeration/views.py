from rest_framework.decorators import api_view, permission_classes
from .serializer import AccountRegistrationSerializer, UserSigninSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import User


@api_view(['POST'])
@permission_classes([])
def signup(request):
    serializer = AccountRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'New user created'}, status=status.HTTP_201_CREATED)
    return Response({'message':'user with this email address already exists.'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([])
def signin(request):
    if request.method == 'POST':
        post_data = dict(request.POST)
        check_user = User.objects.filter(email=post_data['email'][0])
        if len(check_user) == 0:
            return Response({"message":"this email does not exist!"} , status=status.HTTP_404_NOT_FOUND)
        else:
            if check_user[0].check_password(post_data['password'][0]):
                serializer = UserSigninSerializer(check_user[0])
                return Response({"message":"wellcome" , 'user': serializer.data} , status=status.HTTP_202_ACCEPTED)
            else:
                return Response({"message": "password or email is not correct"} , status=status.HTTP_406_NOT_ACCEPTABLE)


def showprofile(request):
    pass