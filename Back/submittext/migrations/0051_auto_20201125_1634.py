# Generated by Django 3.1.2 on 2020-11-25 13:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0050_auto_20201125_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 25, 16, 34, 20, 873727)),
        ),
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 25, 16, 34, 20, 872728)),
        ),
    ]
