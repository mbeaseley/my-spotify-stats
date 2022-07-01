import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule, ScrollHooks, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image';

import { SharedModule } from 'Shared/shared.module';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { RemoveDuplicatesComponent } from './components/remove-duplicates/remove-duplicates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
        path: '**',
        redirectTo: 'profile',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [RecentlyPlayedComponent, RemoveDuplicatesComponent, DashboardComponent],
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
