import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { JoinArrayPipe } from './pipes/join-array.pipe';
import { LocaleDatePipe } from './pipes/locale-date.pipe';
import { ErrorHandleComponent } from './components/error-handle/error-handle.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    ErrorHandleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent,
    JoinArrayPipe,
    LocaleDatePipe
  ],
  entryComponents: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent
  ]
})
export class SharedModule { }
