import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ProgressComponent } from './progress/progress.component';
import { ControlComponent } from './control/control.component';
import { LivepreviewComponent } from './livepreview/livepreview.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { SelectionComponent } from './selection/selection.component';

export const firebaseConfigForControls = {
  apiKey: "AIzaSyCH3QfN6zKmOmxXlMXkTh-gFB2dVyfN4vo",
  authDomain: "lvhbikebuilder.firebaseapp.com",
  databaseURL: "https://lvhbikebuilder.firebaseio.com",
  projectId: "lvhbikebuilder",
  storageBucket: "lvhbikebuilder.appspot.com",
  messagingSenderId: "545718664392"
};

export const firebaseConfigForSales = {
  apiKey: "AIzaSyAl1bsvCcX7xFbw4DMjnL98xcjwl4XB_k8",
  authDomain: "lvhbikesales.firebaseapp.com",
  databaseURL: "https://lvhbikesales.firebaseio.com",
  projectId: "lvhbikesales",
  storageBucket: "lvhbikesales.appspot.com",
  messagingSenderId: "832777484353"
};

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ProgressComponent,
    ControlComponent,
    LivepreviewComponent,
    CartComponent,
    NotfoundComponent,
    HeaderComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfigForControls, 'controls' ),
    AngularFireModule.initializeApp(firebaseConfigForSales,'sales'),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
