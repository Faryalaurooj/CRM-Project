from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Simple test route for debugging
def home(request):
    return JsonResponse({"message": "Django backend is running!"})

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/", include("crm_app.urls")),  # Ensure app URLs are included
    path("", home),  # Handles requests to "/"
]

