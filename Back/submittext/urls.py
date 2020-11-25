from django.urls import path
from . import views

urlpatterns = [
    path("ShowQuestion/", views.ShowQuestion, name="ShowQuestion"),
    path("ShowAnswer/", views.ShowAnswer, name="ShowAnswer"),
    path("ShowUserProfile/", views.ShowUserProfile, name="ShowUserProfile"),
    path("GeneralSearch/", views.GeneralSearch, name="GeneralSearch"),
]
