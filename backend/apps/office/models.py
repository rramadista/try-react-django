from django.db import models
from apps.location.models import Country


class Province(models.Model):
    province_code = models.CharField(max_length=2, primary_key=True)
    province_name = models.CharField(max_length=50)
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.province_name


class City(models.Model):
    city_id = models.CharField(
        max_length=5, primary_key=True)
    city_name = models.CharField(max_length=50)

    def __str__(self):
        return self.city_name

    class Meta:
        verbose_name_plural = "Cities"


class Office(models.Model):
    office_name = models.CharField(max_length=100)
    start_date = models.DateField()
    is_active = models.BooleanField(default=True)
    branch_id = models.IntegerField()
    street = models.CharField(max_length=100, null=True, blank=True)
    building = models.CharField(max_length=100, null=True, blank=True)
    postcode = models.CharField(max_length=5, null=True, blank=True)
    lat = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True)
    long = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True)
    city = models.ForeignKey(
        City, on_delete=models.CASCADE, null=True, blank=True)
    province = models.ForeignKey(
        Province, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return '%s %s' % (self.branch_id, self.office_name)

    class Meta:
        ordering = ('branch_id', )
