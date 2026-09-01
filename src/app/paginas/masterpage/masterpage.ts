import { Component } from '@angular/core';
import { PoMenuPanelItem, PoMenuPanelModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-masterpage',
  standalone: true,
  imports: [PoMenuPanelModule],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.css',
})
export class Masterpage {
  readonly menus: Array<PoMenuPanelItem>=[
    {label:'Home',link:'home',action:this.clickItemMenu.bind(this),icon:'an an-house'},
    {label:'Customers',link:'customers',action:this.clickItemMenu.bind(this),icon:'an an-user'},
    {label:'Products',link:'catalog',action:this.clickItemMenu.bind(this),icon:'an an-grid-four'},
    {label:'Budgets',link:'budgets',action:this.clickItemMenu.bind(this),icon:'an an-shopping-cart'},
    {label:'Exit',link:'logoff',action:this.clickItemMenu.bind(this),icon:'an an-sign-out'}

  ]
  clickItemMenu(menu: PoMenuPanelItem):void{

  }
}
