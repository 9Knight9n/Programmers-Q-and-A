from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Person, Education, ProjectOrJob, ProfessionalSkills, Academics, AreaOfInterest



class Personserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'


class Educationserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ProjectOrJobserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProjectOrJob
        fields = '__all__'


class ProfessionalSkillsserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProfessionalSkills
        fields = '__all__'


class Academicsserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Academics
        fields = '__all__'


class AreaOfInterestserializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AreaOfInterest
        fields = '__all__'
