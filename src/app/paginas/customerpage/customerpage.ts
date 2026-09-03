import { Component, inject, OnInit } from '@angular/core';
import { PoInfoModule, PoListViewModule, PoPageModule } from "@po-ui/ng-components";
import { Customer } from '../../services/customer';

@Component({
  selector: 'app-customerpage',
  imports: [PoPageModule,PoListViewModule,PoInfoModule],
  templateUrl: './customerpage.html',
  styleUrl: './customerpage.css',
})
export class Customerpage implements OnInit {
  public customerList: Array<Customer> = []
  #customerService = inject(Customer)

  ngOnInit(): void {
    this.loadData()

  }
  loadData():void{
    let req = this.#customerService.getCustomers()

    req.subscribe({
      next: (value:any) => {
        this.customerList = value.items
      },

      error(err){
        console.log(`error req customer list`,err)
      },
      complete(){
        console.log(`complete customer list`)
      }
    })

  }
}
