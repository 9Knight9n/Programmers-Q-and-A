from django.urls import path

from . import views

urlpatterns = [
    path('generalchatroom/', views.index, name='generalchatroom'),
    path('generalchatroom/<str:room_name>/', views.room, name='generalchatroom'),
]