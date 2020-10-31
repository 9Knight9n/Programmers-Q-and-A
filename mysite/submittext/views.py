from django.shortcuts import render
from .models import chat_text
from django.views.decorators.csrf import csrf_exempt
from registeration.models import User , UserManager
from django.http import HttpResponse
import json
from django.core import serializers

def submit_text(request):
    if request.method == 'GET':
        response_data = chat_text.objects.all()
        tmpJson = serializers.serialize("json",response_data)
        tmpObj = json.loads(tmpJson)
        return HttpResponse(json.dumps(tmpObj))