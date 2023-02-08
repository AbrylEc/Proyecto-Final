import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioProductosService } from '../services/servicio-productos.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  productos: any = {}
  constructor(private servicio: ServicioProductosService, private router: Router) { }

  id: number = -1

  ngOnInit() {
    this.servicio.getProductos().subscribe(p => {
      this.productos = p
    })
    const temp = this.router.url.split("/")
    console.log(temp.length)
    if (temp.length > 2) {
      this.id = parseInt(temp[2])
    }
  }

  actualizarProducto(id: any, cat: any, precio: any) {
    const producto = { id: id, category: cat, price: precio }
    this.servicio.updateProductos(producto).subscribe(p => { })
  }

  agregarProducto(id: any, cat: any, precio: any) {
    const producto = { id: id, category: cat, price: precio }
    this.servicio.postProductos(producto).subscribe(p => { })
  }
}
