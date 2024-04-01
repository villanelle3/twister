from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer, ProjectManegerSerializer, PostsSerializer, UserSerializer, LikesSerializer, FollowersSerializer  # Make sure ProjectSerializer is imported
from rest_framework.response import Response
from .models import Project, ProjectManeger, Posts, CustomUser, Likes, Followers  # Make sure Project model is imported

# def home(request):
#     return HttpResponse("This is the homepage")

# ----------------------------------------------------------------------------------------------------------------------------------

class ProjectManegerViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = ProjectManeger.objects.all()
    serializer_class = ProjectManegerSerializer

    def list(self, request):
        queryset = ProjectManeger.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

# ----------------------------------------------------------------------------------------------------------------------------------

class UserViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    def list(self, request):
        queryset = CustomUser.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class LikesViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Likes.objects.all()
    serializer_class = LikesSerializer

    def list(self, request):
        queryset = Likes.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class PostViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer

    def list(self, request):
        queryset = Posts.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class FollowersViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Followers.objects.all()
    serializer_class = FollowersSerializer

    def list(self, request):
        queryset = Followers.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
# ----------------------------------------------------------------------------------------------------------------------------------

class ProjectViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def list(self, request):
        queryset = Project.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400) 

    def retrieve(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project)
        return Response(serializer.data)

    def update(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        serializer = self.serializer_class(project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
    def destroy(self, request, pk=None):
        project = self.queryset.get(pk=pk)
        project.delete()
        return Response(status=204)

# ----------------------------------------------------------------------------------------------------------------------------------

