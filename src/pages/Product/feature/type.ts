export interface IProduct {
  id: string;
  name: string;
  selected: boolean;
}

export interface CartList {
  cart: IProduct[];
}
