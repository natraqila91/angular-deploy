export interface Cart {
    items: CartItem[];
}

export interface CartItem {
    productId: string;
    productName: string;
    productImage: string;
    unitPrice: number;
    quantity: number;
}