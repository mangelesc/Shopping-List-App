import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from '../../interfaces/item.interfaz';

@Component({
  selector: 'app-shopping-list-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output()
  public onNewItem: EventEmitter<Item> = new EventEmitter();

  public item: Item = {
  name: '',
  type: '',
  quantity: 0
  };

  emitItem(): void {
    if (this.item.name.length === 0 || this.item.quantity < 0) return;
    this.onNewItem.emit(this.item);

    this.item = {
      name: '',
      type: '',
      quantity: 0
    };
  }
  

}
