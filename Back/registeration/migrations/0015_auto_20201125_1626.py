# Generated by Django 3.1.2 on 2020-11-25 12:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registeration', '0014_auto_20201115_1021'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='repliedQuestions',
            new_name='answeredAnswers',
        ),
    ]