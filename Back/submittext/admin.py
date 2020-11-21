from django.contrib import admin
from .models import Answer , Question , Chatroom_User
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Chatroom_User)

