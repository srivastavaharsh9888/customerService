from django.conf.urls import url
from .views import CompanyList,Message

urlpatterns = [
    url('list/$',CompanyList.as_view(),name='company-list'),
    url('message/$',Message.as_view(),name='message-list')
]
