from rest_framework import serializers
from .models import *

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("id", "name", "projectmaneger", "start_data", "end_data", "comments", "status")

class ProjectManegerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectManeger
        fields = ("name", "id")

