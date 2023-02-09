import { Component } from '@angular/core';
import { Producto } from './app.types';
import { Observable } from 'rxjs';
import { ServicioCarritoDeComprasService } from './services/servicio-carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  carrito$: Observable<Producto[] | null> | undefined;
  constructor(private carritoService: ServicioCarritoDeComprasService) { }
  ngOnInit() {
    this.carritoService.getCarrito().subscribe()
    this.carrito$ = this.carritoService.carrito$
  }
}
