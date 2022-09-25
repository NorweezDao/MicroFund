import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "./component/common/navbar/navbar.component";
import {FooterComponent} from "./component/common/footer/footer.component";
import {NgxScrollTopModule} from "ngx-scrolltop";
import {AppRoutingModule} from "./app-routing.module";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    NgxScrollTopModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
