from django.contrib import admin
from .models import CompanyDetail,MessageDetail,ParentMessage


class CompanyDetailAdmin(admin.ModelAdmin):
    list_display = ('id','name')

class MessageDetailAdmin(admin.ModelAdmin):
    list_display = ('id','parent','optionName','company')

class ParentMessageAdmin(admin.ModelAdmin):
    list_display = ('id','parent','company','msg')

admin.site.register(CompanyDetail,CompanyDetailAdmin)
admin.site.register(MessageDetail,MessageDetailAdmin)
admin.site.register(ParentMessage,ParentMessageAdmin)
