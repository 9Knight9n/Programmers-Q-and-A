# Generated by Django 3.1.2 on 2020-12-11 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('profile_picture', models.FileField(upload_to='profile/image')),
                ('first_name', models.CharField(max_length=20, null=True)),
                ('last_name', models.CharField(max_length=20, null=True)),
                ('username', models.CharField(max_length=30, null=True, unique=True)),
                ('askedQuestions', models.IntegerField(default=0)),
                ('answeredQuestions', models.IntegerField(default=0)),
                ('onlineTime', models.TimeField(null=True)),
                ('numberOfChatrooms', models.IntegerField(default=0)),
                ('description', models.TextField(max_length=100, null=True)),
                ('cvfile', models.FileField(null=True, upload_to='profile/cv')),
                ('interests', models.CharField(default='', max_length=200)),
                ('active', models.BooleanField(default=False)),
                ('staff', models.BooleanField(default=False)),
                ('admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
