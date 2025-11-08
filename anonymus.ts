//Anonymus types

let products: Array<{
  title: string;
  img: string;
  price: number;
  discount: number | undefined;
  count: number;
}>;

let payment: { productAmount: number; gateway: string };

let basket: {
  products: Array<{
    title: string;
    img: string;
    price: number;
    discount: number | undefined;
    count: number;
  }>;
  payment: { productAmount: number; gateway: string };
} = {
  products: [
    {
      title: "Iphone 17 pro",
      img: "https://www.png",
      price: 1000,
      discount: 5,
      count: 3,
    },
  ],
  payment: {
    productAmount: 2850,
    gateway: "zarrinpal",
  },
};
