import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule, ScrollHooks, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

import { FooterComponent } from 'Shared/components/footer/footer.component';
import { JoinArrayPipe } from 'Shared/pipes/join-array.pipe';
import { LocaleDatePipe } from 'Shared/pipes/locale-date.pipe';
import { ErrorHandleComponent } from 'Shared/components/error-handle/error-handle.component';
import { NoSansitizePipe } from 'Shared/pipes/no-sansitize.pipe';
import { LoadingEqualiserComponent } from 'Shared/components/loading-equaliser/loading-equaliser.component';
import { ButtonComponent } from 'Shared/components/button/button.component';

@NgModule({
  declarations: [
    FooterComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    ErrorHandleComponent,
    NoSansitizePipe,
    LoadingEqualiserComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule, LazyLoadImageModule],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  exports: [
    FooterComponent,
    ErrorHandleComponent,
    JoinArrayPipe,
    LocaleDatePipe,
    NoSansitizePipe,
    LoadingEqualiserComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
