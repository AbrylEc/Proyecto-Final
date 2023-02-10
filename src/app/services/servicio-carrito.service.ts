import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Producto } from '../app.types';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoDeComprasService {
  private _carrito =  new BehaviorSubject<Producto[] | null>(null)
  constructor(private http: HttpClient) { }

  API_CARRITO = "http://localhost:3000/carrito"


get carrito$(): Observable<Producto[] | null> {
  return this._carrito.asObservable()
}

  getCarrito(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.API_CARRITO)
    .pipe(
      tap(response => {
          this._carrito.next(response)
      })
  )
  }

  // POST - PRODUCTOS
  postCarrito(carrito: Producto): Observable<Producto> {
    return (this.http.post<Producto>(this.API_CARRITO, carrito))
  }

  updateCarrito(carrito: Producto): Observable<Producto> {
    this.API_CARRITO = `${this.API_CARRITO}/${carrito.id}`
    return this.http.put<Producto>(this.API_CARRITO, carrito)

  }
  deleteCarrito(id: Producto): Observable<Producto> {
    this.API_CARRITO = `${this.API_CARRITO}/${id}`
    return this.http.delete<Producto>(this.API_CARRITO)
  }
}
