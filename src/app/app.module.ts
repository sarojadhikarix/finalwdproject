import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ControlComponent } from './control/control.component';
import { LivepreviewComponent } from './livepreview/livepreview.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ControlComponent,
    LivepreviewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
