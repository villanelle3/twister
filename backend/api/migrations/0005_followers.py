# Generated by Django 5.0.2 on 2024-04-01 21:16

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_likes'),
    ]

    operations = [
        migrations.CreateModel(
            name='Followers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='conta_atual', to=settings.AUTH_USER_MODEL)),
                ('seguindo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seguiu', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
