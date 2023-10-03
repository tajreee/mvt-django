from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Item(models.Model):
    GRADE_LIST = {
        ('Common', 'Common'),
        ('Rare', 'Rare'),
        ('Epic', 'Epic'),
        ('Unique', 'Unique'),
        ('Legendary', 'Legendary'),
        ('Mythical', 'Mythical'),
        ('God', 'God')
    }

    CATEGORY_LIST = {
        ('Weapon', 'Weapon'),
        ('Armor', 'Armor'),
        ('Helmet', 'Helmet'),
        ('Boots', 'Boots'),
        ('Accessories', 'Accessories'),
        ('Relic', 'Relic'),
        ('Potion', 'Potion'),
        ('Stone', 'Stone'),
        ('Ingredients', 'Ingredients'),
        ('Item', 'Item'),
    }

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=255, help_text="Item Name")
    grade = models.CharField(max_length=255, default="Common", choices=sorted(GRADE_LIST))
    category = models.CharField(max_length=255, default="Weapon", choices=sorted(CATEGORY_LIST))
    amount = models.IntegerField(default=None, help_text="Amount of Item")
    description = models.TextField(help_text="Description")