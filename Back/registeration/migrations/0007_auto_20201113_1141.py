# Generated by Django 3.1.2 on 2020-11-13 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registeration', '0006_auto_20201113_1138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='fileField',
            field=models.FileField(null=True, upload_to='profile_cv'),
        ),
    ]
