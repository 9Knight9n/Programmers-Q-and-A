# Generated by Django 3.1.2 on 2020-11-23 15:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0049_auto_20201123_1817'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 19, 25, 37, 255775)),
        ),
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 23, 19, 25, 37, 255775)),
        ),
    ]
