import { Product } from "./product";

export interface Section {
    id: number;
    isOpen: boolean;
    products: Product[];
}