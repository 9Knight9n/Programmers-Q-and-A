# Generated by Django 3.1.2 on 2020-11-14 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registeration', '0010_auto_20201113_2245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picture',
            field=models.FileField(default='images_9kY8zsi.png', upload_to='profile_image'),
        ),
    ]
