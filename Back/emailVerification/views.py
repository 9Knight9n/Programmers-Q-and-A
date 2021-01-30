from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework.decorators import api_view, permission_classes
import os

from .utils import Util
from mysite import settings 


@api_view(['GET'])
@permission_classes([])
def verifyEmail(request):
    data = request.GET
    print(data)
    #token = RefreshToken.for_user(user).access_token
    token = 123456
    current_site = get_current_site(request).domain
 
    relativeLink = reverse('verifyEmail')
    absUrl = "http://" + current_site + relativeLink + "?token=" + str(token)

    email_body = "this is verify email"

    emailData = {'email_body' : email_body , "to_email": data["email"],  "email_subject" : "verify your email 404!"}

    Util.sendEmail(emailData)

    return Response({'message':'user with this email address already exists.'})
    
