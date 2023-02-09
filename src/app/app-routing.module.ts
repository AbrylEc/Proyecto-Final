import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { Error404Component } from './error404/error404.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ModalComponent } from './modal/modal.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'inventario', component: InventarioComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'modal/:id', component: ModalComponent },
  { path: 'productos/:id', component: ProductosComponent },
  { path: 'contactos', component: ContactosComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
