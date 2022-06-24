import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasAccessTokenGuard } from 'Shared/guards/has-access-token.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () => import(`./content/content.module`).then((m) => m.ContentModule),
    canActivate: [HasAccessTokenGuard],
  },
  { path: 'callback', redirectTo: '', data: { hasAccessToken: true } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
