import iphone from "@/assets/p-iphone.jpg";
import samsung from "@/assets/p-samsung.jpg";
import airpods from "@/assets/p-airpods.jpg";
import watch from "@/assets/p-watch.jpg";
import car1 from "@/assets/p-car1.jpg";
import car2 from "@/assets/p-car2.jpg";
import car3 from "@/assets/p-car3.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  inStock: boolean;
};

export const products: Product[] = [
  { id: "1", name: "iPhone 15 Pro Max 256GB", category: "Brand New", price: 1450000, oldPrice: 1600000, image: iphone, badge: "-9%", inStock: true },
  { id: "2", name: "Samsung Galaxy S24 Ultra", category: "Brand New", price: 1180000, image: samsung, badge: "New", inStock: true },
  { id: "3", name: "AirPods Pro 2nd Gen", category: "Accessories", price: 220000, oldPrice: 260000, image: airpods, badge: "Hot", inStock: true },
  { id: "4", name: "Apple Watch Series 9", category: "Accessories", price: 480000, image: watch, inStock: true },
  { id: "5", name: "iPhone 14 Pro UK Used", category: "UK Used", price: 720000, oldPrice: 800000, image: iphone, badge: "-10%", inStock: true },
  { id: "6", name: "Samsung S22 Naija Used", category: "Naija Used", price: 285000, image: samsung, inStock: true },
  { id: "7", name: "AirPods 3rd Gen", category: "Accessories", price: 145000, image: airpods, inStock: false },
  { id: "8", name: "iPhone 13 UK Used", category: "UK Used", price: 540000, image: iphone, badge: "Deal", inStock: true },
];

export type Car = {
  id: string;
  name: string;
  brand: string;
  year: number;
  mileage: string;
  transmission: string;
  fuel: string;
  price: number;
  image: string;
};

export const cars: Car[] = [
  { id: "c1", name: "Toyota Camry SE", brand: "Toyota", year: 2022, mileage: "42,000 km", transmission: "Automatic", fuel: "Petrol", price: 28500000, image: car1 },
  { id: "c2", name: "Mercedes-Benz GLE 350", brand: "Mercedes", year: 2021, mileage: "35,000 km", transmission: "Automatic", fuel: "Petrol", price: 62000000, image: car2 },
  { id: "c3", name: "Lexus RX 350 F-Sport", brand: "Lexus", year: 2020, mileage: "58,000 km", transmission: "Automatic", fuel: "Petrol", price: 45000000, image: car3 },
];

export const formatNaira = (n: number) => "₦" + n.toLocaleString("en-NG");
