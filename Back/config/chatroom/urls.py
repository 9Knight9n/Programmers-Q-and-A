from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers
from . import views
from .views import TopicView, OsView, AppView, PlView, CreateChatroomView

router1 = routers.DefaultRouter()
router1.register('', views.TopicView)
router2 = routers.DefaultRouter()
router2.register('', views.OsView)
router3 = routers.DefaultRouter()
router3.register('', views.AppView)
router4 = routers.DefaultRouter()
router4.register('', views.PlView)
router5 = routers.DefaultRouter()
router5.register('', views.CreateChatroomView)

urlpatterns = [
    path('p1/', include(router1.urls)),
    path('p2/', include(router2.urls)),
    path('p3/', include(router3.urls)),
    path('p4/', include(router4.urls)),
    path('p5/', include(router5.urls))
]

# urlpatterns = [
#    path('', TopicListView.as_view()),
#    path('topic/add/', TopicCreateView.as_view()),
#    path('topic/<int:pk>/', TopicDetailView.as_view()),
# ]
