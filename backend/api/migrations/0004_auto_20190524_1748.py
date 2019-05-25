# Generated by Django 2.2.1 on 2019-05-24 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20190524_1747'),
    ]

    operations = [
        migrations.AlterField(
            model_name='office',
            name='lat',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True, verbose_name='Latitude'),
        ),
        migrations.AlterField(
            model_name='office',
            name='long',
            field=models.DecimalField(blank=True, decimal_places=6, max_digits=9, null=True, verbose_name='Longitude'),
        ),
        migrations.AlterField(
            model_name='office',
            name='postcode',
            field=models.CharField(blank=True, max_length=5, null=True, verbose_name='Postcode'),
        ),
    ]
