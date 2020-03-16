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

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    ErrorHandleComponent,
    LoadingSpinnerComponent
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
    LoadingSpinnerComponent
  ],
  entryComponents: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
