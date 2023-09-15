export interface Order {
  _id: string;
  table: string;
  status: "WAITING" | "DONE" | "IN_PROGRESS";
  products: {
    _id: string;
    quantity: number;
    product: {
      name: string;
      price: number;
      imagePath: string;
    };
  }[];
}
