from django.urls import path

from . import views

urlpatterns = [
    path("createchatroom/", views.createchatroom, name="createchatroom"),
    path("loadchatroom/", views.show_chatrooms, name="show_chatrooms"),
    path("ShowChatroomProfile/", views.ShowChatroomProfile, name="ShowChatroomProfile"),
    path("ShowChatroomByLink/chatroom<int:chatroom_id>/", views.ShowChatroomByLink, name="ShowChatroomByLink"),

]
