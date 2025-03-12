from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'role']

    def create(self, validated_data):
        role = validated_data.pop('role', 'agent')  # Default role is 'agent'
        user = User.objects.create_user(**validated_data)
        user.profile.role = role  # Assuming you have a Profile model with a 'role' field
        user.save()
        return user

