import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'addcliente',
    loadChildren: () => import('./addcliente/addcliente.module').then( m => m.AddclientePageModule)
  },
  {
    path: 'listcliente',
    loadChildren: () => import('./listcliente/listcliente.module').then( m => m.ListclientePageModule)
  },
  {
    path: 'searcliente',
    loadChildren: () => import('./searcliente/searcliente.module').then( m => m.SearclientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
