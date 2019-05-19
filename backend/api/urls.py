from django.urls import path, include
from .views import OfficeListView, OfficeDetailView

urlpatterns = [
    path('', OfficeListView.as_view()),
    path('<pk>', OfficeDetailView.as_view()),
]
