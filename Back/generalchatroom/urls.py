from django.urls import path

from . import views

urlpatterns = [
    path('generalchatroom/', views.index, name='index'),
    path('generalchatroom/<str:room_name>/', views.room, name='room'),
]
