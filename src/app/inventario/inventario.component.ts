import { Component } from '@angular/core';
import { ServicioProductosService } from '../services/servicio-productos.service';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {

  constructor(private servicio: ServicioProductosService) { }
  productos: any = {}

  ngOnInit() {
    this.servicio.getProductos().subscribe(productos =>
      this.productos = productos)
  }

  agregarProducto(id: any, cat: any, precio: any) {
    const producto = { id: id, category: cat, price: precio }
    this.servicio.postProductos(producto).subscribe(p => { })
  }

  eliminarProducto(item: any) {
    const id = item.id
    //console.log(id)
    this.servicio.deleteProductos(id).subscribe(p => { })
    window.location.reload() //Refresca la página
  }

  //window.location.reload()

}


