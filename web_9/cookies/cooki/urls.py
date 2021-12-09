from django.urls import path
from .views import CookieView, CookieViewDetail, CookieFilterByCity

app_name = "cookies"
# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('cookies/', CookieView.as_view()),
    path('cookies/<int:id>', CookieViewDetail.as_view()),
    path('cooki', CookieFilterByCity.as_view())
]
