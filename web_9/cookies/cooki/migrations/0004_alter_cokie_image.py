# Generated by Django 3.2.9 on 2021-12-05 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cooki', '0003_alter_cokie_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cokie',
            name='image',
            field=models.TextField(max_length=300),
        ),
    ]