from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),  # Admin panel
    path("api/", include("crm_app.urls")),  # Include URLs from crm_app
]

