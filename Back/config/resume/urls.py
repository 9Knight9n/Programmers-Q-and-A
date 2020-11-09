from django.urls import path, include
from rest_framework import routers
from . import views

router1 = routers.DefaultRouter()
router1.register('', views.PersonView)
router2 = routers.DefaultRouter()
router2.register('', views.EducationView)
router3 = routers.DefaultRouter()
router3.register('', views.ProjectOrJobView)
router4 = routers.DefaultRouter()
router4.register('', views.ProfessionalSkillsView)
router5 = routers.DefaultRouter()
router5.register('', views.AcademicsView)
router6 = routers.DefaultRouter()
router6.register('', views.AreaOfInterestView)

urlpatterns = [
   path('p1/', include(router1.urls)),
   path('p2/', include(router2.urls)),
   path('p3/', include(router3.urls)),
   path('p4/', include(router4.urls)),
   path('p5/', include(router5.urls)),
   path('p6/', include(router6.urls))
   ]