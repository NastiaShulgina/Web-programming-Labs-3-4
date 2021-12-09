from django.db import models


class Cokie(models.Model):
    city = models.CharField(max_length=40)
    showed = models.CharField(max_length=40)
    price = models.IntegerField()
    name = models.CharField(max_length=40)
    experience = models.IntegerField()
    body = models.CharField(max_length=800)
    image = models.CharField(max_length=300)