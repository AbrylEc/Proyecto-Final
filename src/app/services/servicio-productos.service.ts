import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor(private http: HttpClient) { }

  API_PRODUCTOS = "http://localhost:3000/productos"

  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS)
  }

  // POST - PRODUCTOS
  postProductos(producto: any): Observable<any> {
    return (this.http.post(this.API_PRODUCTOS, producto))
  }

  updateProductos(producto: any): Observable<any> {
    this.API_PRODUCTOS = `${this.API_PRODUCTOS}/${producto.id}`
    return this.http.put(this.API_PRODUCTOS, producto)
  }
  deleteProductos(id: any): Observable<any> {
    this.API_PRODUCTOS = `${this.API_PRODUCTOS}/${id}`
    return this.http.delete(this.API_PRODUCTOS)
  }
}
