# Generated by Django 3.1.2 on 2020-11-12 15:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0006_auto_20201112_1913'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chattext',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 12, 19, 14, 17, 633442)),
        ),
    ]
