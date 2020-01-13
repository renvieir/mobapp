from django.contrib.auth.models import User, Group
from rest_framework import serializers
from record.models import Cycle, Record


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class CycleSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Cycle
    fields = ['user', 'menstruation_start']


class RecordSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Record
    fields = ['id','cycle','date', 'description']
