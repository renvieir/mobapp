from django.db import models
from django.contrib.auth.models import User


class Cycle(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  menstruation_start = models.DateField('menstruation start date')

  def __str__(self):
      return '{}'.format(self.menstruation_start)

class Record(models.Model):
  cycle = models.ForeignKey(Cycle, on_delete=models.CASCADE)
  description = models.CharField(max_length=200)
  date = models.DateField('record date')

  # def __str__(self):
  #     return '{}'.format(self.description)
