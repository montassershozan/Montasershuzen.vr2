import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterCmpComponent } from './footer-cmp/footer-cmp.component';
import { NgxTypedJsModule } from 'ngx-typed-js';



@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterCmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
