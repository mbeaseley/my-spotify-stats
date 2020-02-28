import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./admin/admin.module`)
      .then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import(`./content/content.module`)
      .then(m => m.ContentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
