# Generated by Django 3.1.2 on 2020-11-14 13:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0016_auto_20201114_1316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattext',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 14, 13, 27, 42, 533685)),
        ),
    ]