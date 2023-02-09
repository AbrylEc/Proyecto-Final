import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { ServicioCarritoDeComprasService } from '../services/servicio-carrito.service';
import { Observable } from 'rxjs';
import { Producto } from '../app.types';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos$: Observable<any> | undefined
  constructor(private servicio: ServicioProductosService, private router: Router, private carritoService: ServicioCarritoDeComprasService) { }
  id: number = -1
  ngOnInit() {
    this.productos$ = this.servicio.getProductos()
    const temp = this.router.url.split("/")
    if (temp.length > 2) {
      this.id = parseInt(temp[2])
    }
  }
  agregarAlCarrito(producto: Producto) {
    this.carritoService.postCarrito(producto).subscribe( _ =>
      this.carritoService.getCarrito().subscribe()
    )
  }

}