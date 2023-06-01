import { Component } from '@angular/core';
import { Item } from '../interfaces/item.interfaz';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor ( private ShoppingListService: ShoppingListService ) {
  }

  get shoppingList(): Item[] {
    return this.ShoppingListService.shoppingList
  }

  onDeleteItem (id:string): void {
    this.ShoppingListService.dropItemById(id);
  }

  onNewItem( item: Item ): void {
    this.ShoppingListService.addItem( item );
  }

  onChangeQuantityItem (item: [number, string?]):void {
    const value:number = item[0];
    const id:string = item[1] || '';
    this.ShoppingListService.increaseQuantity(value, id);
  }
}
