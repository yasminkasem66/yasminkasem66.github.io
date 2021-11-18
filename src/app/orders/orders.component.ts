<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Iproduct } from 'app/Models/product/iproduct';
import { OrdersService } from 'app/services/orders/orders.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
>>>>>>> 7f7bd7555baa2050fca2edf0d1467c043c9d7c0e

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
<<<<<<< HEAD
  
  constructor(private fb: FormBuilder) {}
=======
  orderList:any={};
  orderCount:number=null

constructor (private orderService:OrdersService){
  this.orderService.getAllOrders().subscribe((orderList)=>{
    console.log(orderList)
    this.orderList=orderList
    this.orderCount=orderList.count

    // this.orderList=orderList.orders
    // for(var i =0 ; i<orderList.orders.)
  

  },
  (err)=>{
    console.log(err)
  })

}  
  
>>>>>>> 7f7bd7555baa2050fca2edf0d1467c043c9d7c0e

 
}
