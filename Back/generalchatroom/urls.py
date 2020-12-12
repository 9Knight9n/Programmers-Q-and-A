from django.urls import path

from . import views

urlpatterns = [
    path('generalchatroom/', views.index, name='generalchatroom'),
]