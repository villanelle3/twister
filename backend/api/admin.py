from django.contrib import admin
from .models import CustomUser, Project, ProjectManeger, Posts, Likes

admin.site.register(CustomUser)
admin.site.register(Project)
admin.site.register(ProjectManeger)
admin.site.register(Posts)
admin.site.register(Likes)



