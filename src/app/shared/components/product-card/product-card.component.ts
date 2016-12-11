import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces'

@Component({
    selector: 'product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
    emptyImageUrl = 'assets/products/empty-img.png';
    
    constructor() { }

    @Input('item')
    product: Product;

    @Output('addToCart')
    onAddToCart = new EventEmitter<Product>();

    addToCart(prod: Product) {
        this.onAddToCart.emit(prod);
    }
}