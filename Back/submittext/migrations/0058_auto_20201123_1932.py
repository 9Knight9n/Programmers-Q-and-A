# Generated by Django 3.1.2 on 2020-11-23 16:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0057_auto_20201123_1932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 19, 32, 45, 509031)),
        ),
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 19, 32, 45, 509031)),
        ),
    ]
