# Generated by Django 2.2.1 on 2019-05-19 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Office',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('office_name', models.CharField(max_length=100, verbose_name='Office Name')),
                ('start_date', models.DateField(verbose_name='Start Date')),
                ('is_active', models.BooleanField(default=True, verbose_name='Flag Active')),
                ('branch_id', models.IntegerField(verbose_name='Branch ID')),
            ],
        ),
    ]
