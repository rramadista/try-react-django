from django.contrib import admin
from .models import Region, Country, Subdivision, SubdivisionCategory


admin.site.register(Region)
admin.site.register(Country)
admin.site.register(Subdivision)
admin.site.register(SubdivisionCategory)
