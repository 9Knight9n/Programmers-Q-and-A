# Generated by Django 3.1.2 on 2020-11-13 08:08

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0009_auto_20201113_1114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattext',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 13, 11, 38, 22, 14135)),
        ),
    ]
