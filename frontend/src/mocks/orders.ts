import { Order } from "../components/types/Order";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orders: Order[] = [
  {
    _id: "6372e48cbcd195b0d3d0f7f3",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1689294726112-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "6372e48cbcd195b0d3d0f7f4",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1689295459554-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "6372e48cbcd195b0d3d0f7f5",
      },
    ],
  },
  {
    _id: "6372e48cbcd195b0d3d0f7f4",
    table: "555",
    status: "IN_PROGRESS",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1689294726112-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "6372e48cbcd195b0d3d0f7f4",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1689295459554-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "6372e48cbcd195b0d3d0f7f5",
      },
    ],
  },
  {
    _id: "6372e48cbcd195b0d3d0f7f22",
    table: "999",
    status: "DONE",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1689294726112-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "6372e48cbcd195b0d3d0f7f4",
      },
      {
        product: {
          name: "Coca cola",
          imagePath: "1689295459554-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "6372e48cbcd195b0d3d0f7f5",
      },
    ],
  },
];
