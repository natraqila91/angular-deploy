import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

    constructor(private http: Http) { }

    private search(query: string = '') {
        const search$ = this.http
            .get('assets/data/products.json')
            .map(x => x.json())
            .delay(500);
        const findbyName = (products: Product[]) => Observable
            .of(products.filter(x => x.name
                .toLowerCase()
                .search(query) >= 0));

        return !query ? search$ : search$.flatMap(x => findbyName(x));
    }

    getList(query: string = ''): Observable<Product[]> {
        return this.search(query);
    }

    get(id: string): Observable<Product> {
        const findbyId = (products) => Observable
            .from(products)
            .find((x: Product) => x.id === id);

        return this.getList()
            .flatMap(x => findbyId(x));
    }

    add(product: Product) {
        return Observable.of(product);
    }
}