from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

# ----------------------------------------------------------------------------------------------------------------------------------

class CustomUser(AbstractUser):
    foto = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.username


class Posts(models.Model):
    data = models.DateTimeField(default=datetime.datetime.now)
    texto = models.CharField(max_length=900)
    dono = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="user_postou")
    likes = models.ManyToManyField(CustomUser, related_name="like", default=None, blank=True)
    like_count = models.BigIntegerField(default=0)

    def __str__(self):
        return f"{self.texto}, postado por {self.dono}, dia {self.data}."

    @property
    def total_likes(self):
        return self.likes.count()


class Likes(models.Model):
    quem_deu_like = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="user_likou")
    post = models.ForeignKey(Posts, on_delete=models.CASCADE, related_name="post_likado")
    def __str__(self):
        return f"{self.quem_deu_like}, gostou do post {self.post}."
    

class Followers(models.Model):
    conta = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="conta_atual") # so uma pessoa
    seguindo = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="seguiu")
    
# ----------------------------------------------------------------------------------------------------------------------------------
    
class ProjectManeger(models.Model):
    name = models.CharField(unique=True, max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(unique=True, max_length=100)
    projectmaneger = models.ForeignKey(ProjectManeger, on_delete = models.CASCADE, blank=True, null=True)
    start_data = models.DateField()
    end_data = models.DateField()
    comments = models.CharField(max_length=500, blank=True, null=True)
    status = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
