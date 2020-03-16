import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { RemoveDuplicatesComponent } from './components/remove-duplicates/remove-duplicates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'callback', redirectTo: '' },
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
    RemoveDuplicatesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
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
