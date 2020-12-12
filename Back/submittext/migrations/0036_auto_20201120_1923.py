# Generated by Django 3.1.2 on 2020-11-20 15:53

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('chatroom', '0005_auto_20201120_1523'),
        ('submittext', '0035_auto_20201120_1523'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='chatroom',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='chatroom.chatroom'),
        ),
        migrations.AddField(
            model_name='question',
            name='commonQuestion',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='question',
            name='isAnswered',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='answer',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 20, 19, 23, 19, 573091)),
        ),
        migrations.AlterField(
            model_name='question',
            name='file',
            field=models.FileField(null=True, upload_to='question/file'),
        ),
        migrations.AlterField(
            model_name='question',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2020, 11, 20, 19, 23, 19, 572092)),
        ),
        migrations.AlterField(
            model_name='question',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]