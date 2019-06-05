from django.contrib import admin
from .models import Region, Country, Subdivision, SubdivisionCategory, City, Province, Regency, District, Village


class CountryAdmin(admin.ModelAdmin):
    list_display = ('country_name', 'region')


class SubdivisionAdmin(admin.ModelAdmin):
    list_display = ('subdivision_name', 'country')


admin.site.register(Region)
admin.site.register(Country, CountryAdmin)
admin.site.register(Subdivision, SubdivisionAdmin)
admin.site.register(SubdivisionCategory)
admin.site.register(City)
admin.site.register(Province)
admin.site.register(Regency)
admin.site.register(District)
admin.site.register(Village)
