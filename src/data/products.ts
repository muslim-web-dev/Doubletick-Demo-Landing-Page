import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 89.99,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home Decor",
    isNew: true,
    description: "Sleek design with adjustable brightness, perfect for your workspace."
  },
  {
    id: 2,
    name: "Leather Weekender Bag",
    price: 199.99,
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    isBestSeller: true,
    description: "Premium leather with ample space for your weekend getaways."
  },
  {
    id: 3,
    name: "Ceramic Plant Pot",
    price: 49.99,
    image: "https://images.pexels.com/photos/4207790/pexels-photo-4207790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home Decor",
    description: "Handcrafted ceramic pot, perfect for your indoor plants."
  },
  {
    id: 4,
    name: "Premium Watch",
    price: 299.99,
    image: "https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Accessories",
    isNew: true,
    description: "Elegant timepiece with premium materials and classic design."
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 129.99,
    image: "https://images.pexels.com/photos/6069943/pexels-photo-6069943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Kitchen",
    isBestSeller: true,
    description: "Modern design with programmable settings for the perfect brew."
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 149.99,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Electronics",
    description: "Crystal clear sound with comfortable fit and long battery life."
  },
  {
    id: 7,
    name: "Modern Desk Chair",
    price: 249.99,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Furniture",
    description: "Ergonomic design with adjustable height and lumbar support."
  },
  {
    id: 8,
    name: "Scented Candle Set",
    price: 39.99,
    image: "https://images.pexels.com/photos/4202924/pexels-photo-4202924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Home Decor",
    isNew: true,
    description: "Set of three premium scented candles with long burn time."
  }
];

export const categories = [
  { id: 1, name: "Home Decor", image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Accessories", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Kitchen", image: "https://images.pexels.com/photos/6069943/pexels-photo-6069943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Electronics", image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
];