from django.urls import path
from . import views

urlpatterns = [
    path("submit", views.send_all_text, name="submit"),
]