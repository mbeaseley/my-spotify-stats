import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule, ScrollHooks, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { JoinArrayPipe } from './pipes/join-array.pipe';
import { LocaleDatePipe } from './pipes/locale-date.pipe';
import { ErrorHandleComponent } from './components/error-handle/error-handle.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StatFactComponent } from './components/stat-fact/stat-fact.component';
import { NoSansitizePipe } from './pipes/no-sansitize.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    ErrorHandleComponent,
    LoadingSpinnerComponent,
    ProfileComponent,
    StatFactComponent,
    NoSansitizePipe,
  ],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  exports: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    LoadingSpinnerComponent,
    ProfileComponent,
    StatFactComponent,
    NoSansitizePipe,
  ],
  entryComponents: [
    FooterComponent,
    NavComponent,
    ErrorHandleComponent,
    LoadingSpinnerComponent,
    ProfileComponent,
    StatFactComponent,
  ],
})
export class SharedModule {}
