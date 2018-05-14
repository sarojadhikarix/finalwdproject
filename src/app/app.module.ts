import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ControlComponent } from './control/control.component';
import { LivepreviewComponent } from './livepreview/livepreview.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCH3QfN6zKmOmxXlMXkTh-gFB2dVyfN4vo",
  authDomain: "lvhbikebuilder.firebaseapp.com",
  databaseURL: "https://lvhbikebuilder.firebaseio.com",
  projectId: "lvhbikebuilder",
  storageBucket: "lvhbikebuilder.appspot.com",
  messagingSenderId: "545718664392"
};
@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ControlComponent,
    LivepreviewComponent,
    CartComponent,
    NotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
