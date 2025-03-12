from django.contrib.auth.models import User
from django.db import models

# Define user roles
ROLE_CHOICES = (
    ("admin", "Admin"),
    ("agent", "Agent"),
    ("customer", "Customer"),
)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default="customer")

    def __str__(self):
        return f"{self.user.username} - {self.role}"

