import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../interfaces';
import { ProductService } from '../../services';

@Component({
    selector: 'product-add-form',
    templateUrl: './product-add-form.component.html'
})
export class ProductAddFormComponent {
    emptyImageUrl = 'assets/products/empty-img.png';

    constructor(private router: Router, private productSvc: ProductService) { }

    saveProduct(product: Product, isValid: boolean) {
        if (!isValid) return;
        this.productSvc.add(product)
            .subscribe(x => {
                this.router.navigate(['./', { id: x.id }])
            }, err => {
                console.error(err);
            });
    }
}