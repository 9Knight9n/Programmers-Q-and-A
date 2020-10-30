from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from registeration.models import User , UserManager
from django.http import HttpResponse
import json
from django.core import serializers


# Create your views here.
def login(request):
    return render(request , "register.html")

@csrf_exempt
def homepage(request):
    # we need check that data is in database
    if request.method == 'POST':
        response_data = User.objects.all()
        user = User()
        tmpJson = serializers.serialize("json",response_data)
        tmpObj = json.loads(tmpJson)
        email = request.POST.get('email')
        password = request.POST.get('password')
        #UserManager.find_user(email,password)
        #UserManager.create_user(email,password)
        return HttpResponse(json.dumps(tmpObj))
    #return render(request , "wellcome.html" , {"user": user})

def signup(request):
    pass