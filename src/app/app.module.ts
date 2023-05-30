import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
