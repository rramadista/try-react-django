from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Office
from .serializers import OfficeSerializer


class OfficeListView(ListAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer


class OfficeDetailView(RetrieveAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer
