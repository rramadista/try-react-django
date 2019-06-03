from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from .models import Office
from .serializers import OfficeSerializer


class OfficeListView(ListAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer


class OfficeDetailView(RetrieveAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer


class OfficeCreateView(CreateAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer


class OfficeUpdateView(UpdateAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer


class OfficeDeleteView(DestroyAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer
