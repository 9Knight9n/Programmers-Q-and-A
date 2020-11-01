from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from registeration.models import User , UserManager
from django.http import HttpResponse
import json , urllib
from django.core import serializers



# Create your views here.
def login(request):
    return render(request , "register.html")

@csrf_exempt
def homepage(request):
    # we need check that data is in database
    if request.method == 'POST':
        #response_data = User.objects.all()
        #user = User()
        #tmpJson = serializers.serialize("json",response_data)
        #tmpObj = json.loads(tmpJson)
        url = "http://127.0.0.1:8000/"
        response = urllib.request.urlopen(url)
        data = json.loads(response.read())
        print (data)
        #return HttpResponse(json.dumps(tmpObj))
        return HttpResponse(data)

def signup(request):
    pass