from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from registeration.models import User , UserManager
from django.http import JsonResponse
import json
from django.http import StreamingHttpResponse
from django.core import serializers


# Create your views here.
def login(request):
    return render(request , "register.html")

@csrf_exempt
def homepage(request):
    # we need check that data is in database
    if request.method == 'POST':
        post_data = dict(request.POST)
        check_user = User.objects.filter(email=post_data['email'][0])
        if len(check_user) == 0:
            return JsonResponse({"error":"this email does not exist!"})
        else:
            if check_user[0].check_password(post_data['password'][0]):
                return JsonResponse({"error":"wellcome"})
            else:
                return JsonResponse({"error": "password or email is not correct"})


@csrf_exempt
def signup(request):
    # we need check that data is in database
    if request.method == 'POST':
        post_data = dict(request.POST)
        check_user = User.objects.filter(email=post_data['email'][0])
        print(len(check_user))
        if len(check_user) == 0:
            user = User(
                email=post_data['email'][0]
            )
            password = post_data['password'][0]
            user.set_password(password)
            user.save()
            return JsonResponse(post_data)
        else:
            return JsonResponse({"error":"Email already registerd!"})