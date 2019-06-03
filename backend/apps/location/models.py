from django.db import models


class Region(models.Model):
    CONTINENT = (
        ('1', 'Africa'),
        ('2', 'North America'),
        ('3', 'South America'),
        ('4', 'Asia'),
        ('5', 'Europe'),
        ('6', 'Oceania'),
        ('7', 'Antartica'),
    )
    region_name = models.CharField(max_length=25)
    continent = models.CharField(
        max_length=2, choices=CONTINENT, blank=True, null=True)

    def __str__(self):
        return self.region_name


class Country(models.Model):
    country_code = models.CharField(max_length=2, primary_key=True)
    country_name = models.CharField(max_length=60)
    region = models.ForeignKey(
        Region, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.country_name

    class Meta:
        ordering = ('country_code', )
        verbose_name_plural = "Countries"


class SubdivisionCategory(models.Model):
    category_name = models.CharField(max_length=30)

    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name_plural = "Subdivision Categories"


class Subdivision(models.Model):
    subdivision_code = models.CharField(max_length=6, primary_key=True)
    subdivision_name = models.CharField(max_length=60)
    category = models.ForeignKey(
        SubdivisionCategory, on_delete=models.CASCADE, blank=True, null=True)
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, blank=True, null=True)
    is_recommended = models.BooleanField(default=True)
    alt_code = models.CharField(max_length=4, blank=True, null=True)

    def __str__(self):
        return self.subdivision_name
