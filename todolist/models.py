from django.db import models

P_CHOICE = (
    (2,'high'),
    (1,'middle'),
    (0,'low'),
)

COLORS = (
    ('#f44336', 'red'),
    ('#e91e63', 'pink'),
    ('#2196f3', 'blue'),

)

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=400)
    priority = models.CharField(choices=P_CHOICE, max_length=10)
    date = models.DateTimeField(auto_now_add=True)
    checked = models.BooleanField(default=False)

class Materia(models.Model):
    nombre = models.CharField(max_length=50)
    color = models.CharField(choices=COLORS, max_length=7)