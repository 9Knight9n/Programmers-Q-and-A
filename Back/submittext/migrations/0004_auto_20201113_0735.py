# Generated by Django 3.1.2 on 2020-11-13 04:05

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0003_auto_20201113_0734'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattext',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 13, 7, 35, 37, 145935)),
        ),
    ]
