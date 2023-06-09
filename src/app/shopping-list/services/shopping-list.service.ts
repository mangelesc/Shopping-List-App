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
      type: 'FruitsVegetables',
      quantity: 5 
    },
    {
      id: uuid(),
      name: 'Bananas',
      type: 'FruitsVegetables',
      quantity: 5
    },
    {
      id: uuid(),
      name: 'Cheese',
      type: 'DairyProducts',
      quantity: 1
    },
    {
      id: uuid(),
      name: 'Orange Juice',
      type: 'Beverages',
      quantity: 2
    },
    {
      id: uuid(),
      name: 'Birthday Cake',
      type: 'Bakery',
      quantity: 1
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

  increaseQuantity (value : number, id:string): void {
    this._shoppingList.forEach(item => {
      if (item.id === id && (item.quantity + value) > 0){
        item.quantity += value;

      }
    });
  }
}