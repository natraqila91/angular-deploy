import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../interfaces';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class ProductImplService {

    constructor(private http: Http) { }

    private baseUrl = environment.apiUrl + 'product';

    getList(query: string = ''): Observable<Product[]> {
        return this.http
            .get(`${this.baseUrl}?name=${query}`)
            .map(x => x.json());
    }

    get(id: string): Observable<Product> {
        return this.http
            .get(`${this.baseUrl}/${id}`)
            .map(x => x.json());
    }

    add(product: Product) {
        return this.http
            .post(this.baseUrl, product)
            .map(x => x.json());
    }
}