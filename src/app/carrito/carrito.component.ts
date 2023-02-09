import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  constructor(private servicio: ServicioProductosService) { }
  productos: any = {}

  ngOnInit() {
    this.servicio.getProductos().subscribe(productos =>
      this.productos = productos)
  }

}
