import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwatchesComponent } from './swatches/swatches.component';
import { SwatchComponent } from './swatch/swatch.component';

@NgModule({
  declarations: [
    AppComponent,
    SwatchesComponent,
    SwatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
