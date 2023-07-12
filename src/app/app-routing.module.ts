import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '404',
    title: 'Erro 404 - Rick and Morty',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },
  {
    path: 'home',
    title: 'Home - Rick and Morty',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sobre',
    title: 'Sobre - Rick and Morty',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'contato',
    title: 'Contato - Rick and Morty',
    loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'politicas',
    title: 'Políticas - Rick and Morty',
    loadChildren: () => import('./pages/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
