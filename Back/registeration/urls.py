from django.urls import path
from registeration import views

urlpatterns = [
    path("", views.signin, name="homepage"),
    path("signup", views.signup, name="signup"),
]