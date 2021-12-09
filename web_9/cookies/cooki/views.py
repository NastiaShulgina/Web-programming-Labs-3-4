from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Cokie
from .serializers import SerializerCokie

class CookieView(APIView):
    def get(self,request):
        cookies = [cookie for cookie in Cokie.objects.all()]
        cooks = []
        for el in cookies:
            cooki = {}
            cooki['id'] = el.id
            cooki['name'] = el.name
            cooki['showed'] = el.showed
            cooki['city'] = el.city
            cooki['price'] = el.price
            cooki['experience'] = el.experience
            cooki['body'] = el.body
            cooki['image'] = el.image
            cooks.append(cooki)
        print(cooks)

        return Response({"cooks":cooks})
class CookieViewDetail(APIView):
    def get(self,request,id):
        cookies = Cokie.objects.filter(id=id)
        for el in cookies:
            cooki = {}
            cooki['id'] = el.id
            cooki['name'] = el.name
            cooki['showed'] = el.showed
            cooki['city'] = el.city
            cooki['price'] = el.price
            cooki['experience'] = el.experience
            cooki['body'] = el.body
            cooki['image'] = el.image
        print(cooki)
        return Response(cooki)

class CookieFilterByCity(APIView):
    def get(self,request):
        city = request.GET['city']
        cooks = []
        cookies = Cokie.objects.filter(city=city)
        for el in cookies:
            cooki = {}
            cooki['id'] = el.id
            cooki['name'] = el.name
            cooki['showed'] = el.showed
            cooki['city'] = el.city
            cooki['price'] = el.price
            cooki['experience'] = el.experience
            cooki['body'] = el.body
            cooki['image'] = el.image
            cooks.append(cooki)
        print(cooki)
        return Response(cooks)
