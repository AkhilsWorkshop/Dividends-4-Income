from django.urls import path
from django.urls.resolvers import URLPattern
from . import views

urlpatterns = [
    path('<str:tid>', views.ticker, name='ticker'),
    path('', views.index, name='index'),
]