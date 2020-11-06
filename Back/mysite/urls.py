from django.contrib import admin
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('' , include("registeration.urls")),
    path('' , include('django.contrib.auth.urls')),
    path('' , include("submittext.urls")),
    path('' , include('registeration.api.urls' , 'registeration_api')),
]