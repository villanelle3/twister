from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("id", "username", "foto", "first_name", "last_name", "bio")

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ("id", "data", "texto", "dono", "likes", "like_count")

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ("quem_deu_like", "post")

class FollowersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Followers
        fields = ("conta", "seguindo")

# ----------------------------------------------------------------------------------------------------------------------------------

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("id", "name", "projectmaneger", "start_data", "end_data", "comments", "status")

class ProjectManegerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectManeger
        fields = ("name", "id")

