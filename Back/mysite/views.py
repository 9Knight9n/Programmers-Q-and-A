from django.shortcuts import render
from . import settings
import os
from django.http import HttpResponse

def index(request):
    # print(settings.STATIC_ROOT)
    with open(os.path.join(settings.STATIC_ROOT, '/index.html')) as f:
        return HttpResponse(f.read())