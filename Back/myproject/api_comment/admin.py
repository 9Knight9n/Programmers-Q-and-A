from django.contrib import admin
#
# # Register your models here.
# from api_comment.models import Question
# #
from api_comment.models import *

admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Comment)
