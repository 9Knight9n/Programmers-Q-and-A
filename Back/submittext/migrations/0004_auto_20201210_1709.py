# Generated by Django 3.1.2 on 2020-12-10 13:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('submittext', '0003_auto_20201210_1708'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user_answer',
            old_name='voteState',
            new_name='isVoted',
        ),
    ]
