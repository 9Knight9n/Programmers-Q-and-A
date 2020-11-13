from django.urls import path
from . import views

urlpatterns = [
    path("showpersonalinfo/", views.show_personal_info, name="showpersonalinfo"),
    path("getpersonalinfo/", views.get_personal_info, name="getpersonalinfo"),
]