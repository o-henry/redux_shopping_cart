export interface IProduct {
  id: string;
  thumbnailUrl: string;
  selected: boolean;
}

export interface CartList {
  cart: IProduct[];
}
