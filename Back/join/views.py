from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from registeration.models import User


@api_view(['POST'])
def join(request):
    data = dict(request.POST)
    user = User.objects.filter(id=data['owner'][0])
    Topic = data["selectedTopic"][0]
    # my_group = Group.objects.get(name='my_group_name')
    Topic.User_set.add(User)
