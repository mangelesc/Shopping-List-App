import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/item.interfaz';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  // Recibimos la info del padre
  @Input()
  shoppingList : Item[] = [];

  // Mandamos la info al padre
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteItem (id?:string): void {
    if ( !id ) return;
    this.onDelete.emit(id);
  }

  @Output()
  public onChangeQuantity: EventEmitter<[number, string?]> = new EventEmitter();

  onChangeQuantityItem (value:number, id?:string ): void {
    if ( !id ) return;
    this.onChangeQuantity.emit([value, id]);
  }
}
