# Generated by Django 3.1.2 on 2020-11-20 18:41

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0042_auto_20201120_2208'),
    ]

    operations = [
        migrations.RenameField(
            model_name='answer',
            old_name='q',
            new_name='question',
        ),
        migrations.AlterField(
            model_name='answer',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 20, 22, 11, 12, 521416)),
        ),
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 20, 22, 11, 12, 520417)),
        ),
    ]