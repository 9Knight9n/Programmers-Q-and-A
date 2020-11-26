from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('question', views.QuestionView)
router.register('answer', views.AnswerView)
router.register('comment', views.CommentView)

urlpatterns = [
    path('v1/', include(router.urls)),
]
