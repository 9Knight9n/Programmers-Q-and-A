from django.contrib import admin
from django.urls import path , include
from registeration import views as v
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('' , include("registeration.urls")),
    path('' , include('django.contrib.auth.urls')),
    path('' , include("submittext.urls")),
    path('' , include('registeration.api.urls' , 'registeration_api')),
    #path('auth/login/', jwt_views.TokenObtainPairView.as_view(), name='login'),
    path('api/token/' , jwt_views.TokenObtainPairView.as_view()),
    #path('api/token/reflesh/' , jwt_views.TokenRefreshView.as_view()),
]
#urlpatterns = urlpatterns + static(settings.MEDIA_URL , document_root=settings.MEDIA_URL)