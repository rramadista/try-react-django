from django.db import models


class Province(models.Model):
    province_id = models.CharField(
        "Province ID", max_length=2, primary_key=True)
    province_name = models.CharField("Province", max_length=50)

    def __str__(self):
        return self.province_name


class City(models.Model):
    city_id = models.CharField(
        "City ID", max_length=5, primary_key=True)
    city_name = models.CharField("City", max_length=50)

    def __str__(self):
        return self.city_name

    class Meta:
        verbose_name_plural = "Cities"


class Office(models.Model):
    office_name = models.CharField("Office Name", max_length=100)
    start_date = models.DateField("Start Date")
    is_active = models.BooleanField("Flag Active", default=True)
    branch_id = models.IntegerField("Branch ID")
    street = models.CharField(
        "Street", max_length=100, null=True, blank=True)
    building = models.CharField(
        "Building", max_length=100, null=True, blank=True)
    postcode = models.CharField(
        "Postcode", max_length=5, null=True, blank=True)
    lat = models.DecimalField(
        "Latitude", max_digits=9, decimal_places=6, null=True, blank=True)
    long = models.DecimalField(
        "Longitude", max_digits=9, decimal_places=6, null=True, blank=True)
    city = models.ForeignKey(
        City, on_delete=models.CASCADE, null=True, blank=True)
    province = models.ForeignKey(
        Province, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return '%s %s' % (self.branch_id, self.office_name)

    class Meta:
        ordering = ('branch_id', )
