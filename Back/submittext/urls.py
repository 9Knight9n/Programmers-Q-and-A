from django.urls import path
from . import views

urlpatterns = [
    path("AddQuestion/", views.AddQuestion, name="AddQuestion"),
    path("ShowQuestion/", views.ShowQuestion, name="ShowQuestion"),
    path("ShowAnswer/", views.ShowAnswer, name="ShowAnswer"),
    path("ShowUserProfile/", views.ShowUserProfile, name="ShowUserProfile"),
    path("AddAnswer/", views.AddAnswer, name="AddAnswer"),
]