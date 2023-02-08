import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  constructor(private servicio: ServicioProductosService) { }
  productos: any = {}

  ngOnInit() {
    this.servicio.getProductos().subscribe(productos =>
      this.productos = productos)
  }
}
