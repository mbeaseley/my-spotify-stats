import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent
  ],
  imports: [CommonModule],
  exports: [
    FooterComponent,
    NavComponent
  ],
  entryComponents: [
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }
