from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from record.serializers import UserSerializer, GroupSerializer, CycleSerializer, RecordSerializer
from record.models import Cycle, Record


class UserViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed or edited.
  """
  queryset = User.objects.filter(is_staff=0).order_by('-date_joined')
  serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows groups to be viewed or edited.
  """
  queryset = Group.objects.all()
  serializer_class = GroupSerializer


class CycleViewSet(viewsets.ModelViewSet):
  queryset = Cycle.objects.all()
  serializer_class = CycleSerializer

class RecordViewSet(viewsets.ModelViewSet):
  queryset = Record.objects.all()
  serializer_class = RecordSerializer