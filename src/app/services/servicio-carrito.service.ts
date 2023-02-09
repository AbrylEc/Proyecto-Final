import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoDeComprasService {

  constructor(private http: HttpClient) { }

  API_CARRITO = "http://localhost:3000/carritoDeCompras"

  getCarrito(): Observable<any> {
    return this.http.get(this.API_CARRITO)
  }

  // POST - PRODUCTOS
  postCarrito(carrito: any): Observable<any> {
    return (this.http.post(this.API_CARRITO, carrito))
  }

  updateCarrito(carrito: any): Observable<any> {
    this.API_CARRITO = `${this.API_CARRITO}/${carrito.id}`
    return this.http.put(this.API_CARRITO, carrito)
  }
  deleteCarrito(id: any): Observable<any> {
    this.API_CARRITO = `${this.API_CARRITO}/${id}`
    return this.http.delete(this.API_CARRITO)
  }
}
