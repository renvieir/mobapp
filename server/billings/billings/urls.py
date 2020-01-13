from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from record import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)
router.register(r'cycles', views.CycleViewSet)
router.register(r'records', views.RecordViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    # path('record/', include('record.url')),
    path('admin/', admin.site.urls),
]
