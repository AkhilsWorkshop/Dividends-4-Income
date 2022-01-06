from django.db import models

# Create your models here.
class TickerForm(models.Model):
    ticker = models.CharField(max_length=5)