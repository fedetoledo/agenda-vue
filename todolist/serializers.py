from rest_framework import serializers

from .models import Todo, Materia

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Todo
        fields = '__all__'

class MateriaSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Materia
        fields = '__all__'