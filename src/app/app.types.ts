export interface Carrito {
  id: number;
  cantidad: number;
  precio: number;
}
export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}