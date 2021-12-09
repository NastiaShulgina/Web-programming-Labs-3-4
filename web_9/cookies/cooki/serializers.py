from rest_framework import serializers
from .models import Cokie

class SerializerCokie(serializers.ModelSerializer):
    class Meta:
        model = Cokie
        fields = ('id')