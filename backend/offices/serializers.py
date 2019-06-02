from rest_framework import serializers
from .models import Office


class OfficeSerializer(serializers.ModelSerializer):
    city = serializers.SlugRelatedField(slug_field="city_name", read_only=True)
    province = serializers.SlugRelatedField(
        slug_field="province_name", read_only=True)

    class Meta:
        model = Office
        fields = '__all__'
