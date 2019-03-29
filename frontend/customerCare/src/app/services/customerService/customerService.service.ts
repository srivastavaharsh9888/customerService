import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable()
export class CustomerService {

  constructor(public http: HttpClient) {
  }

  getCompanyState(): Subject<string> {
    const dataSubject = new Subject<any>();
    this.http.get(
      `http://localhost:8000/list/`)
      .subscribe((data) => {
        dataSubject.next(data);
      },(err) => {
        console.log(err);
      });
    return dataSubject;
  }

  getMessage(msgId: Number,companyId:Number): Subject<any> {
    const dataSubject = new Subject<any>();
    let id: number;
    this.http.get(
      `http://localhost:8000/message/?msgId=${msgId}&companyId=${companyId}`)
      .subscribe((message) => {
        dataSubject.next(message);
      },(err)=>{
        console.log(err)
      });
    return dataSubject;
  }
}
