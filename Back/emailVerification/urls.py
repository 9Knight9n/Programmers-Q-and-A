from django.urls import path

from . import views

urlpatterns = [
    path("sendVerifyEmail/", views.sendVerifyEmail, name="sendVerifyEmail"),
    path("emailVerification/", views.emailVerification, name="emailVerification"),
]
