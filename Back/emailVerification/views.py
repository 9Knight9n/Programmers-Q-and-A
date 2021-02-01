from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from rest_framework.decorators import api_view, permission_classes
import os
import jwt

from .utils import Util
from mysite import settings 
from registeration.models import User


@api_view(['GET'])
@permission_classes([])
def sendVerifyEmail(request):
    data = request.GET
    user = User.objects.get(id=data['user_id'])
    token = RefreshToken.for_user(user).access_token
    current_site = get_current_site(request).domain
 
    #relativeLink = reverse('verifyEmail')
    absUrl = "http://" + current_site + "/api/emailVerification/" + "?token=" + str(token)
    print(absUrl)
    email_body = "this is verify email"

    emailData = {'email_body' : email_body , "to_email": user.email,  "email_subject" : "404!"}

    Util.sendEmail(emailData)

    return Response({'message':'send email verification seccussfully.'})


@api_view(['GET'])
@permission_classes([])
def emailVerification(request):
    data = request.GET
    canDecode = False
    try:
        decodedPayload = jwt.decode(data['token'],None,None)
        canDecode = True
    except:
        canDecode = False
    
    if not canDecode:
        return Response({'message':'token is not valid.'})
    user = None
    try:
        user = User.objects.get(id=decodedPayload["user_id"])
    except:
        pass
    print(user)
    if user != None:
        user.isVerified = True
        user.save()

        return Response({'message':'email verify seccussfully.'})
    else:
        return Response({'message':'user not found.'})

@api_view(['GET'])
@permission_classes([])
def isVerified(request):
    data = request.GET

    