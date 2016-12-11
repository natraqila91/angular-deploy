import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, CartService } from '../shared/services';
import { Product } from '../shared/interfaces';

@Component({
    selector: 'page-products',
    templateUrl: './page-products.component.html',
    styleUrls: ['./page-products.component.css']
})
export class PageProductsComponent implements OnInit {
    constructor(private route: ActivatedRoute, 
        private router: Router,
        private productSvc: ProductService,
        private cartSvc: CartService) { }

    queryStr: string;
    productList: Product[];

    ngOnInit() {
        this.route.params
            .do((x: PageProductsRouteParam) => this.queryStr = x.query)
            .flatMap((x: PageProductsRouteParam) => this.productSvc.getList(x.query))
            .subscribe(x => {
                this.productList = x;
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

    clearFilter() {
        this.router.navigate(['/'])
    }
}

interface PageProductsRouteParam {
    query: string
}