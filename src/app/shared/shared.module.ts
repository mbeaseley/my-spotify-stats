import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { JoinArrayPipe } from './pipes/join-array.pipe';
import { LocaleDatePipe } from './pipes/locale-date.pipe';
import { ErrorHandleComponent } from './components/error-handle/error-handle.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsefulFactComponent } from './components/useful-fact/useful-fact.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    ErrorHandleComponent,
    LoadingSpinnerComponent,
    ProfileComponent,
    UsefulFactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  exports: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    LoadingSpinnerComponent,
    ProfileComponent,
    UsefulFactComponent
  ],
  entryComponents: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent,
    LoadingSpinnerComponent,
    ProfileComponent,
    UsefulFactComponent
  ]
})
export class SharedModule { }
