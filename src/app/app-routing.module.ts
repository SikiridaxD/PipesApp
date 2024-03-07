import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

//Importar las dos funciones creadas en el guard
import { canActivateGuard, canMatchGuard } from 'src/app/auth/guards/auth.guard'
import { canMatchGuard2 } from './auth/guards/public.guard';
import { LayoutPageComponent } from './notes/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule),
    canMatch: [canMatchGuard2],
  },
  {
    path: 'heroes',
    loadChildren: ()=> import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [canActivateGuard],
    canMatch: [canMatchGuard],
  },
  {
    path: 'notes',
    component: LayoutPageComponent
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
