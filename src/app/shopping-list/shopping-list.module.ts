import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddItemComponent } from './components/add-item/add-item.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    AddItemComponent
  ],
})
export class ShoppingListModule { }
