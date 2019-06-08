from rest_framework import serializers
from .models import Office


class OfficeSerializer(serializers.ModelSerializer):
    province = serializers.StringRelatedField()
    city = serializers.SlugRelatedField(
        slug_field="regency_name", read_only=True)

    class Meta:
        model = Office
        fields = '__all__'
