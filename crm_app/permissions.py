from rest_framework.permissions import BasePermission

class IsAdmin(BasePermission):
    """Allows access only to Admin users."""

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.userprofile.role == "admin"

class IsAgent(BasePermission):
    """Allows access only to Agents."""

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.userprofile.role == "agent"

class IsCustomer(BasePermission):
    """Allows access only to Customers."""

    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.userprofile.role == "customer"

