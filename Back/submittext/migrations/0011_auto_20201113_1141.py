# Generated by Django 3.1.2 on 2020-11-13 08:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0010_auto_20201113_1138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattext',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 13, 11, 41, 10, 596757)),
        ),
    ]
