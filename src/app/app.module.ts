import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './shopping-list/components/add-item/add-item.component';
import { ListComponent } from './shopping-list/components/list/list.component';

@NgModule({
  declarations: [
    
    AppComponent,
    AddItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
