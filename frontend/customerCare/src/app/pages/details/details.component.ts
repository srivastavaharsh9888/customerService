import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customerService/customerService.service';
import {Message} from './entity';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  message:Message;
  companyId:Number;
  selected:Number=-1;
  messageList:Array<any>;

  constructor(public activeRouter: ActivatedRoute, public customer: CustomerService) {
    this.message=new Message();
    this.messageList=[];
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((route: any) => {
      this.companyId = route.params.id;
      this.customer.getMessage(this.selected,this.companyId)
        .subscribe((data:any) => {
          this.message=data;
          this.message.parMsg["url"]="./../assets/customer.jpeg";
          this.messageList.push(this.message);
          console.log(this.messageList);
        });
      });
  }

  userMsg(option){
    this.messageList.push({"parMsg":{"msg":option.optionName,"userClass":"other","url":"./../assets/images.png"})
    this.customer.getMessage(option.id,this.companyId)
      .subscribe((data:any) => {
        this.message=data;
        this.message.parMsg["url"]="./../assets/customer.jpeg";
        this.messageList.push(this.message);
        window.scrollTo(0,document.body.scrollHeight);
      });
      window.scrollTo(0,document.body.scrollHeight);
  }

}
