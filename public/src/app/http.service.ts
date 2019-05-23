import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    selectedMovie: any;

    constructor(private _httpClient: HttpClient) { }  

    readAllMovies(){
        return this._httpClient.get('/readAllMovies');
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
    createMovie(movie){
        console.log('inside service, create movie')
        return this._httpClient.post('/createMovie', movie);
    }
    selectMovie(movie){
        this.selectedMovie = movie
    }
    getMovie(){
        return this.selectedMovie
    }
    deleteMovie(movie){
        console.log('inside service', movie._id)
        return this._httpClient.delete(`/deleteMovie/${movie._id}`);
    }
    updateMovie(movie){
        console.log('inside service')
        return this._httpClient.put('/updateMovie',movie);
    }
}
