from django.urls import path, include
from rest_framework import routers
from .viewsets import TodoViewSet, MateriaViewSet

router = routers.DefaultRouter()
router.register('todos', TodoViewSet)
router.register('materias', MateriaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
