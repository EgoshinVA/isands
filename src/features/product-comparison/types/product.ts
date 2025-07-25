export interface Product {
  id: string;
  name: string;
  image: string;
  specs: {
    [key: string]: string | number | boolean;
  };
}

export type ProductList = Product[];
