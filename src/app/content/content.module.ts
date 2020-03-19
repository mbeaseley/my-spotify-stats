import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

import { SharedModule } from '../shared/shared.module';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { RemoveDuplicatesComponent } from './components/remove-duplicates/remove-duplicates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'callback', redirectTo: '' },
  { path: 'top-tracks', component: TopTracksComponent, pathMatch: 'full' },
  { path: 'top-artists', component: TopArtistsComponent, pathMatch: 'full' },
  { path: 'recently-played', component: RecentlyPlayedComponent, pathMatch: 'full' },
  { path: 'remove-duplicates', component: RemoveDuplicatesComponent, pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    RecentlyPlayedComponent,
    TopTracksComponent,
    TopArtistsComponent,
    RemoveDuplicatesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  exports: [RouterModule],
  entryComponents: [
    DashboardComponent,
    RecentlyPlayedComponent,
    TopTracksComponent,
    TopArtistsComponent,
    RemoveDuplicatesComponent
  ]
})
export class ContentModule { }
