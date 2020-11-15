from django.contrib import admin
from django.urls import path , include
from registeration import views as v
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/' , include("registeration.urls")),
    path('api/' , include('django.contrib.auth.urls')),
    path('api/' , include("submittext.urls")),
    path('api/token/' , jwt_views.TokenObtainPairView.as_view()),
    path('api/token/refresh/' , jwt_views.TokenRefreshView.as_view()),
    path('api/' , include("userprofile.urls")),
    path('api/' , include("chatroom.urls")),
]
#urlpatterns = urlpatterns + static(settings.MEDIA_URL , document_root=settings.MEDIA_URL)