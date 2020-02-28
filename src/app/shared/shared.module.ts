import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { JoinArrayPipe } from './pipes/join-array.pipe';
import { LocaleDatePipe } from './pipes/locale-date.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    JoinArrayPipe,
    LocaleDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavComponent,
    JoinArrayPipe,
    LocaleDatePipe
  ],
  entryComponents: [
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
