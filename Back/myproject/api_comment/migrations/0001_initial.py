# Generated by Django 3.1.3 on 2020-11-21 09:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('answer', models.TextField(verbose_name='جواب')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ')),
                ('rank', models.IntegerField(default=0, verbose_name='رتبه')),
            ],
            options={
                'verbose_name': 'جواب',
                'verbose_name_plural': 'جواب ها',
            },
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField(verbose_name='کامنت')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ')),
            ],
            options={
                'verbose_name': 'کامنت',
                'verbose_name_plural': 'کامنت ها',
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('header', models.CharField(max_length=300, verbose_name='عنوان')),
                ('question', models.TextField(verbose_name='سوال')),
                ('link', models.URLField(verbose_name='لینک')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='تاریخ')),
                ('rank', models.IntegerField(default=0, verbose_name='رتبه')),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_comment.answer')),
            ],
            options={
                'verbose_name': 'سوال',
                'verbose_name_plural': 'سوالات',
            },
        ),
        migrations.AddField(
            model_name='answer',
            name='comment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api_comment.comment'),
        ),
    ]
