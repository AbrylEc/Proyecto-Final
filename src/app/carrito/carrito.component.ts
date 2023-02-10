import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { ServicioCarritoDeComprasService } from '../services/servicio-carrito.service';
import { Producto } from '../app.types';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(
    private servicio: ServicioProductosService,
    private carritoService: ServicioCarritoDeComprasService) { }
  productos: any = {}

  ngOnInit() {
    this.servicio.getProductos().subscribe(productos =>
      this.productos = productos)
  }

  agregarAlCarrito(producto: Producto) {
    this.carritoService.postCarrito(producto).subscribe( _ =>
      this.carritoService.getCarrito().subscribe()
    )
  }

}
