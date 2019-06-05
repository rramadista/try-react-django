from django.db import models


class Region(models.Model):
    region_code = models.CharField(max_length=3, primary_key=True)
    region_name = models.CharField(max_length=25)
    continent_name = models.CharField(max_length=15)

    def __str__(self):
        return self.region_name


class Country(models.Model):
    country_code = models.CharField(max_length=2, primary_key=True)
    country_name = models.CharField(max_length=60)
    region = models.ForeignKey(
        Region, on_delete=models.SET_NULL, blank=True, null=True)

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
    country = models.ForeignKey(
        Country, on_delete=models.SET_NULL, blank=True, null=True)
    category = models.ForeignKey(
        SubdivisionCategory, on_delete=models.SET_NULL, blank=True, null=True)
    is_recommended = models.BooleanField(default=True)
    alt_code = models.CharField(
        "Alternative code", max_length=4, blank=True, null=True)

    def __str__(self):
        return self.subdivision_name


class City(models.Model):
    city_code = models.CharField(max_length=10, primary_key=True)
    city_name = models.CharField(max_length=30)
    is_capital = models.BooleanField(default=False)

    def __str__(self):
        return self.city_name

    class Meta:
        verbose_name_plural = "Cities"


class Province(models.Model):
    province_code = models.CharField(max_length=2, primary_key=True)
    province_name = models.CharField(max_length=50)
    subdivision = models.OneToOneField(
        Subdivision, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return '%s, %s' % (self.subdivision.country, self.subdivision.subdivision_name)


class Regency(models.Model):
    province = models.ForeignKey(
        Province, on_delete=models.SET_NULL, blank=True, null=True)
    regency_code = models.CharField(max_length=4, primary_key=True)
    regency_name = models.CharField(max_length=30)
    is_city = models.BooleanField(default=False)
    is_capital = models.BooleanField(default=False)

    def __str__(self):
        return '%s | %s' % (self.province, self.regency_name)

    class Meta:
        verbose_name_plural = "Regencies"


class District(models.Model):
    province = models.ForeignKey(
        Province, on_delete=models.SET_NULL, blank=True, null=True)
    regency = models.ForeignKey(
        Regency, on_delete=models.SET_NULL, blank=True, null=True)
    district_code = models.CharField(max_length=7, primary_key=True)
    district_name = models.CharField(max_length=50)

    def __str__(self):
        return '%s | %s' % (self.regency, self.district_name)


class Village(models.Model):
    province = models.ForeignKey(
        Province, on_delete=models.SET_NULL, blank=True, null=True)
    regency = models.ForeignKey(
        Regency, on_delete=models.SET_NULL, blank=True, null=True)
    district = models.ForeignKey(
        District, on_delete=models.SET_NULL, blank=True, null=True)
    village_code = models.CharField(max_length=11, primary_key=True)
    village_name = models.CharField(max_length=50)
    is_village = models.BooleanField(default=True)

    def __str__(self):
        return '%s | %s' % (self.district, self.village_name)
