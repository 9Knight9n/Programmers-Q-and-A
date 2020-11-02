from django.urls import path
from submittext import views

urlpatterns = [
    path("submit", views.submit_text, name="submit"),
]