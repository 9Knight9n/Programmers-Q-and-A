from django.contrib import admin
from .models import Topic, Os, App, Pl, CreateChatroom

admin.site.register(Topic)
admin.site.register(Os)
admin.site.register(App)
admin.site.register(Pl)
admin.site.register(CreateChatroom)