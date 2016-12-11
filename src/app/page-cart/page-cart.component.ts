import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services';
import { Cart } from '../shared/interfaces';

@Component({
    selector: 'page-cart',
    templateUrl: './page-cart.component.html',
    styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {
    cart: Cart;
    cartTotal = 0;
    emptyImageUrl = 'assets/products/empty-img.png';

    constructor(private cartSvc: CartService) { }

    ngOnInit() {
        this.cart = this.cartSvc.cart.value;

        if (this.cart && this.cart.items && this.cart.items.length) {
            this.cartTotal = this.cart.items.map(x => x.unitPrice).reduce((prev, curr) => {
                return +prev + +curr;
            }, 0)
        }
    }
}