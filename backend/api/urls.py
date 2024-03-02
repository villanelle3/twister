from django.urls import include, path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("project", ProjectViewSet, basename="project")
urlpatterns = router.urls

# urlpatterns = [
#     path("", home),
# ]
