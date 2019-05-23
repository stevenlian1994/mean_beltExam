import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _httpClient: HttpClient) { }  

    readAllProducts(){
        return this._httpClient.get('/readAllProducts');
    }

    createProduct(product){
        console.log('inside service')
        return this._httpClient.post('/createProduct', product);
    }
    updateProduct(product){
        return this._httpClient.put('/updateProduct', product);
    }
    deleteProduct(product){
        console.log('inside service:', product._id)
        return this._httpClient.delete(`/deleteProduct/${product._id}`);
    }
    createReview(review){
        console.log('inside service, create review')
        return this._httpClient.post('/createReview', review);
    }
}
