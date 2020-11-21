from django.urls import path
from . import views

urlpatterns = [
    path("ShowQuestion/", views.ShowQuestion, name="ShowQuestion"),
    path("ShowAnswer/", views.ShowAnswer, name="ShowAnswer"),
]