import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Item } from '../interfaces/item.interfaz';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  private _shoppingList: Item[] = [
    {
      id: uuid(),
      name: 'Apples',
      type: 'fruit',
      quantity: 5 
    },
    {
      id: uuid(),
      name: 'Bananas',
      type: 'fruit',
      quantity: 5
    },
    {
      id: uuid(),
      name: 'Milk',
      type: 'dairy',
      quantity: 3
    }
  ]

  get shoppingList(): Item[] {
    return [...this._shoppingList]
  }

  addItem ( item: Item ): void {
    const newItem: Item = {id: uuid() , ...item }
    this._shoppingList.push(newItem);
  }

  dropItemById ( id:string ): void {
    this._shoppingList = this._shoppingList.filter( item => item.id !== id );
  }

  increaseQuantity (id:string, value : number): void {
    this._shoppingList.forEach(item => {
      if (item.id === id){
        item.quantity += value;
      }
    });
  }
}