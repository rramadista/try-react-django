from django.contrib import admin
from .models import Branch, Office, BranchOffice


admin.site.register(Branch)
admin.site.register(Office)
admin.site.register(BranchOffice)
