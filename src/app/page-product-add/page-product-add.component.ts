import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, CartService } from '../shared/services';
import { Product } from '../shared/interfaces';

@Component({
    selector: 'page-product',
    templateUrl: './page-product-add.component.html'
})
export class PageProductAddComponent implements OnInit {
    product: Product;

    constructor(private route: ActivatedRoute, private router: Router,
        private productSvc: ProductService) { }

    ngOnInit() {
    }

    add(product: Product) {
    }
}