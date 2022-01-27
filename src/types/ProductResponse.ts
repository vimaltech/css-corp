export type RatingType = {
  rate: number;
  count: number;
};

export enum ProductCategory {
  MensClothing = "men's clothing",
  Jewelry = 'jewelry',
  Electronics = 'electronics',
  WomansClothing = "women's clothing",
}

export type ProductResponse = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: RatingType;
};
