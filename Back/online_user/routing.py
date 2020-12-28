from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/api/online_checker/', consumers.ChatConsumer.as_asgi()),

]