from django.shortcuts import render, reverse
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic.edit import FormMixin
from django.views.generic import (
    ListView,
    DetailView,
    CreateView,
    UpdateView,
    DeleteView
)

from .models import Topic, Os, App, Pl, CreateChatroom
from rest_framework import viewsets
from .serializer import Topicserializer, Osserializer, Appserializer, Plserializer, CreateChatroomserializer
from django.contrib.sites.requests import RequestSite
from django.shortcuts import render
from django.http import HttpResponse


class TopicView(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = Topicserializer


class OsView(viewsets.ModelViewSet):
    queryset = Os.objects.all()
    serializer_class = Osserializer


class AppView(viewsets.ModelViewSet):
    queryset = App.objects.all()
    serializer_class = Appserializer


class PlView(viewsets.ModelViewSet):
    queryset = Pl.objects.all()
    serializer_class = Plserializer


class CreateChatroomView(viewsets.ModelViewSet):
    queryset = CreateChatroom.objects.all()
    serializer_class = CreateChatroomserializer


def resumeView(request):
    site_name = RequestSite(request).domain
    topic = Topic.objects.all()
    os = Os.objects.all()
    app = App.objects.all()
    pl = Pl.objects.all()
    createChatroom = CreateChatroom.objects.all()

    return render(request, '', {
        'site_name': site_name,
        'topic': topic,
        'os': os,
        'app': app,
        'pl': pl,
        'createChatroom': createChatroom,
    }
                  )

# class TopicListView(ListView):
#    queryset = Topic.objects.all()
#    serializer_class = CreateTopicserializer
#    context_object_name = 'topics'


# class TopicDetailView(DetailView):
#    queryset = Topic.objects.all()
#    serializer_class = CreateTopicserializer

#    def get_context_data(self, **kwargs):
#        context = super(TopicDetailView, self).get_context_data(**kwargs)
# context['posts'] = Post.objects.filter(topic=self.kwargs.get('pk'))
#        return context


# class TopicCreateView(LoginRequiredMixin, CreateView):
#    queryset = Topic.objects.all()
#    serializer_class = CreateTopicserializer
#    fields = ['title', 'description']

# def form_valid(self, form):
# return super().form_valid(form)

