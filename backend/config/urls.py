from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('office/', include('apps.office.urls')),
    path('city/', include('apps.location.urls')),
]
