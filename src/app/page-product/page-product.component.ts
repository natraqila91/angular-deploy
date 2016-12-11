import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, CartService } from '../shared/services';
import { Product } from '../shared/interfaces';

@Component({
    selector: 'page-product',
    templateUrl: './page-product.component.html',
    styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {
    product: Product;
    emptyImageUrl = 'assets/products/empty-img.png';

    constructor(private route: ActivatedRoute, private router: Router,
        private productSvc: ProductService, private cartSvc: CartService) { }

    ngOnInit() {
        this.route.params
            .flatMap((x: PageProductRouteParam) => {
                return this.productSvc.get(x.id);
            })
            .subscribe(x => {
                this.product = x;
            });
    }

    addItemToCart(product: Product) {
        this.cartSvc.addToCart({
            productId: product.id,
            productName: product.name,
            productImage: product.image,
            quantity: 1,
            unitPrice: product.sellingPrice,
        })
    }
}

interface PageProductRouteParam {
    id: string
}