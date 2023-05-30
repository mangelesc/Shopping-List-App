import { Injectable } from '@angular/core';

import { Item } from '../interfaces/item.interfaz';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private _shoppingList: Item[] = [
    {
      id: '1',
      name: 'Apples',
      type: 'fruit',
      quantity: 5 
    },
    {
      id: '2',
      name: 'Bananas',
      type: 'fruit',
      quantity: 5
    },
    {
      id: '3',
      name: 'Milk',
      type: 'dairy',
      quantity: 3
    }
  ]

  get shoppingList(): Item[] {
    return [...this._shoppingList]
  }

  addItem ( item: Item ): void {
    this._shoppingList.push(item);
  }

  dropItemById ( id:string ): void {
    this._shoppingList = this._shoppingList.filter( item => item.id !== id );
  }
}