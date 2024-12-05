export interface IProduct {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  quantityLeft: number;
  description: string;
  userRating: number;
  numOfReviews: number;
  reviews: { userName: string; review: string }[];
  cartItemId?: string;
}
