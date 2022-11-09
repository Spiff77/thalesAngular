import { Component } from '@angular/core';
import {Client} from './model/client.model';
import {Supplier} from './model/supplier.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  client: Client = {
    firstname: 'Thomas',
    lastname: 'Lhomme',
    active: true
  }

  supplier: Supplier = {
    firstname: 'Thomas',
    lastname: 'Lhomme',
    active: true,
    companyName: 'Treelevel',
    bankInfoNumber: '123123123',
    ca: 10000
  }
  value = 'red'

  getSupplierClass(): string {
    if(this.supplier.ca < 1000)
      return 'low'
    else if(this.supplier.ca >= 1000 && this.supplier.ca < 5000)
      return 'medium'
    else
      return 'high'
  }


  toggleActive() {
     this.client.active = !this.client.active
     this.value = this.client.active ? 'green' : 'red'
  }
}
