from django.urls import path
from registeration import views

urlpatterns = [
    path("login", views.login, name="login"),
    path("", views.homepage, name="homepage"),
]