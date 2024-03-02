from rest_framework import serializers
from .models import *

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("name", "start_data", "end_data", "comments", "status")

