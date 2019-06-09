from .models import City
from .serializers import CitySerializer
from rest_framework import viewsets


class CityViewSet(viewsets.ModelViewSet):
    serializer_class = CitySerializer
    queryset = City.objects.all()
