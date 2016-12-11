import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Cart, CartItem } from '../interfaces';

@Injectable()
export class CartService {

    cart = new BehaviorSubject<Cart>({ items: [] });

    addToCart(item: CartItem) {
        const currentCart:Cart = this.cart.value;
        currentCart.items.push(item);

        this.cart.next(currentCart);
    }
}