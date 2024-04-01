from django.urls import include, path
from . views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("user", UserViewSet, basename="user")
router.register("likes", LikesViewSet, basename="likes")
router.register("posts", PostViewSet, basename="posts")
router.register("followers", FollowersViewSet, basename="followers")


router.register("project", ProjectViewSet, basename="project")
router.register("projectmaneger", ProjectManegerViewSet, basename="projectmaneger")

urlpatterns = router.urls
