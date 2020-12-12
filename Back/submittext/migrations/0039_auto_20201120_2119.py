# Generated by Django 3.1.2 on 2020-11-20 17:49

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0038_auto_20201120_2113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='parent_text',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='submittext.answer'),
        ),
        migrations.AlterField(
            model_name='answer',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 20, 21, 19, 37, 467369)),
        ),
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 20, 21, 19, 37, 466370)),
        ),
    ]