import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'Shared/shared.module';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
