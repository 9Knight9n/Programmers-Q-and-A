# Generated by Django 3.1.2 on 2020-11-14 19:09

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0026_auto_20201114_1759'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattext',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 14, 19, 9, 44, 673883)),
        ),
    ]
