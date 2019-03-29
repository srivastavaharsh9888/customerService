from .models import CompanyDetail,MessageDetail,ParentMessage
from rest_framework import serializers

class CompanyDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=CompanyDetail
        fields='__all__'

class MessageDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=MessageDetail
        fields='__all__'
        extra_fields=['userClass']

class ParentMessageSerializer(serializers.ModelSerializer):
    userClass=serializers.CharField(max_length=5,default="you")
    class Meta:
        model=ParentMessage
        fields='__all__'
        extra_fields=['userClass']
