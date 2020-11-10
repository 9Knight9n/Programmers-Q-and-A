from django.urls import path
from registeration import views

urlpatterns = [
    path("signin", views.signin, name="signin"),
    path("signup", views.signup, name="signup"),
]