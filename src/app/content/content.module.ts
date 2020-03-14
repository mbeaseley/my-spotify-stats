import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { RemoveDuplicatesComponent } from './components/remove-duplicates/remove-duplicates.component';

const routes: Routes = [
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'top-artists', component: TopArtistsComponent },
  { path: 'recently-played', component: RecentlyPlayedComponent },
  { path: 'remove-duplicates', component: RemoveDuplicatesComponent }
];

@NgModule({
  declarations: [
    RecentlyPlayedComponent,
    TopTracksComponent,
    TopArtistsComponent,
    RemoveDuplicatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class ContentModule { }
