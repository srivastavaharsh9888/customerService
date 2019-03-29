import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CustomerService} from '../../services/customerService/customerService.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit, OnDestroy {

  companyList : Array<any>;

  constructor(public customer: CustomerService, public router: Router) {
  }

  ngOnInit() {

    this.customer.getCompanyState()
      .subscribe((data:any) => {
        this.companyList=data;
      });

  }

  ngOnDestroy() {

  }

  openDetails(id) {
    this.router.navigateByUrl('/details/'+id);
  }

}
