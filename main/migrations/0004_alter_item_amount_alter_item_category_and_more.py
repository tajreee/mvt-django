# Generated by Django 4.2.5 on 2023-09-25 05:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_item_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='amount',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[(1, 'Weapon'), (2, 'Armor'), (3, 'Helmet'), (4, 'Boots'), (5, 'Accesories'), (6, 'Relic'), (7, 'Potion'), (8, 'Stone'), (9, 'Ingredients'), (10, 'Item')], default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='item',
            name='grade',
            field=models.CharField(choices=[(1, 'Common'), (2, 'Rare'), (3, 'Epic'), (4, 'Unique'), (5, 'Legendary'), (6, 'Mythical'), (7, 'God')], default=None, max_length=255),
        ),
    ]
