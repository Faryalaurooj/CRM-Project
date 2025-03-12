from django.urls import path
from .views import RegisterUserView, admin_dashboard, ProtectedEndpointView, LoginView

urlpatterns = [
    path("register/", RegisterUserView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),  # ✅ Make sure LoginView is correctly imported
    path("protected-endpoint/", ProtectedEndpointView.as_view(), name="protected-endpoint"),
    path("admin-dashboard/", admin_dashboard, name="admin-dashboard"),
]

