from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=255)
    grade = models.CharField(max_length=255, default=None)
    category = models.CharField(max_length=255, default=None)
    amount = models.IntegerField(default=1)
    description = models.TextField()