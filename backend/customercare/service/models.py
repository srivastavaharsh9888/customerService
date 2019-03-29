from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class CompanyDetail(models.Model):
    name=models.CharField(max_length=50)
    desc=models.TextField(null=True,blank=True)
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    logo=models.FileField(upload_to="logo/",blank=True,null=True)

class MessageDetail(models.Model):
    parent=models.IntegerField()
    optionName=models.CharField(max_length=250)
    company=models.ForeignKey(CompanyDetail,on_delete=models.CASCADE)

class ParentMessage(models.Model):
    parent=models.IntegerField(default=0)
    msg=models.TextField()
    company=models.ForeignKey(CompanyDetail,on_delete=models.CASCADE)

    class Meta(object):
        unique_together=('company','parent')
