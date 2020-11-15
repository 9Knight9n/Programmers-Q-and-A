from django.urls import path
from . import views

urlpatterns = [
    path("showchats/", views.send_all_text, name="showchats"),
    path("submitchat/", views.get_text, name="submitchat"),
]