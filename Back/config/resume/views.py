from rest_framework import viewsets
from .serializers import Personserializer, Educationserializer, ProjectOrJobserializer, ProfessionalSkillsserializer, \
    Academicsserializer, AreaOfInterestserializer
# from django.shortcuts import render_to_response
from django.contrib.sites.requests import RequestSite
from .models import Person, Education, ProjectOrJob, ProfessionalSkills, Academics, AreaOfInterest
from django.shortcuts import render
from django.http import HttpResponse


class PersonView(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = Personserializer


class EducationView(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = Educationserializer


class ProjectOrJobView(viewsets.ModelViewSet):
    queryset = ProjectOrJob.objects.all()
    serializer_class = ProjectOrJobserializer


class ProfessionalSkillsView(viewsets.ModelViewSet):
    queryset = ProfessionalSkills.objects.all()
    serializer_class = ProfessionalSkillsserializer


class AcademicsView(viewsets.ModelViewSet):
    queryset = Academics.objects.all()
    serializer_class = Academicsserializer


class AreaOfInterestView(viewsets.ModelViewSet):
    queryset = AreaOfInterest.objects.all()
    serializer_class = AreaOfInterestserializer


def resumeView(request):
    site_name = RequestSite(request).domain
    person = Person.objects.all()[:1]
    education = Education.objects.all()
    projectOrJob = ProjectOrJob.objects.all()[:5]
    professionalSkills = ProfessionalSkills.objects.all()[:5]
    academics = Academics.objects.all()[:5]
    areaOfInterest = AreaOfInterest.objects.all()

    return render('resume/resume_view.html', {
        'site_name': site_name,
        'person': person,
        'education': education,
        'projectOrJob': projectOrJob,
        'professionalSkills': professionalSkills,
        'academics': academics,
        'areaOfInterest': areaOfInterest,
    }
                  )  # , context_instance=RequestContext(request))
