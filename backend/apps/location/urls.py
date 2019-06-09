from .views import CityViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', CityViewSet, base_name='cities')
urlpatterns = router.urls
