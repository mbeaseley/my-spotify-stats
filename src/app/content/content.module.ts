import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'Shared/shared.module';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';

const routes: Routes = [
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'top-artists', component: TopArtistsComponent },
  { path: 'recently-played', component: RecentlyPlayedComponent }
];

@NgModule({
  declarations: [
    RecentlyPlayedComponent,
    TopTracksComponent,
    TopArtistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class ContentModule { }
