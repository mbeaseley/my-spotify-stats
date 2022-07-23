import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule, ScrollHooks, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

import { SharedModule } from 'Shared/shared.module';
import { DashboardComponent } from 'Content/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then((c) => c.ProfileComponent),
      },
      {
        path: 'top-artists',
        loadComponent: () =>
          import('./top-artists/top-artists.component').then((c) => c.TopArtistsComponent),
      },
      {
        path: 'top-tracks',
        loadComponent: () =>
          import('./top-tracks/top-tracks.component').then((c) => c.TopTracksComponent),
      },
      {
        path: 'recently-played',
        loadComponent: () =>
          import('./recently-played/recently-played.component').then(
            (c) => c.RecentlyPlayedComponent,
          ),
      },
      {
        path: '**',
        redirectTo: 'profile',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
  exports: [RouterModule],
})
export class ContentModule {}
