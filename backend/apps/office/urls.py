from django.urls import path, include
from .views import (
    OfficeListView,
    OfficeDetailView,
    OfficeCreateView,
    OfficeUpdateView,
    OfficeDeleteView
)

urlpatterns = [
    path('', OfficeListView.as_view()),
    path('create', OfficeCreateView.as_view()),
    path('<pk>', OfficeDetailView.as_view()),
    path('<pk>/update/', OfficeUpdateView.as_view()),
    path('<pk>/delete', OfficeDeleteView.as_view()),
]
