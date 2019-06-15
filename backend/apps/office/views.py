from django.db.models import Q
from django.shortcuts import render
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView
)
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter
)
from .models import Office
from .serializers import OfficeSerializer


class OfficeListView(ListAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['office_name', 'street', 'building']

    # def get_queryset(self, *args, **kwargs):
    #     queryset_list = Office.objects.all()
    #     query = self.request.GET.get("q")
    #     if query:
    #         queryset_list = queryset_list.filter(
    #             Q(office_name__icontains=query) |
    #             Q(street__icontains=query) |
    #             Q(building__icontains=query)
    #         ).distinct()
    #     return queryset_list


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
