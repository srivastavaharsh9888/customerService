from .serializers import MessageDetailSerializer,CompanyDetailSerializer,ParentMessageSerializer
from .models import MessageDetail,CompanyDetail,ParentMessage

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser

class CompanyList(generics.ListAPIView):
    serializer_class=CompanyDetailSerializer

    def get_queryset(self):
        return CompanyDetail.objects.all()

class Message(APIView):

    def get(self,request,*args,**kwargs):
        msgId=self.request.query_params.get('msgId',-1)
        companyId=self.request.query_params.get('companyId',1)
        par_msg=ParentMessage.objects.filter(company=companyId,parent=msgId).first()
        msg_obj=MessageDetail.objects.filter(company=companyId,parent=msgId)
        serializer=MessageDetailSerializer(msg_obj,many=True)
        parSerializer=ParentMessageSerializer(par_msg)
        data={"parMsg":parSerializer.data,"details":serializer.data}
        return Response(data,status=status.HTTP_200_OK)
