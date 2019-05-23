import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    allProducts = [];
    selectedProduct : any;
    newReview = {};

    constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.readAllProducts();
  }
  readAllProducts(){
    let observable = this._httpService.readAllProducts();
    observable.subscribe(data=>{
        console.log(data);
        this.allProducts = data['products'];
        console.log('allproducts:', this.allProducts)
    })
    }
    selectProduct(product){
        this.selectedProduct = product
    }
    deleteProduct(product){
        let observable = this._httpService.deleteProduct(product);
        observable.subscribe(data=>{
            console.log('back from db',data);
            this.readAllProducts()
        })
    }
    invoke(data){
        // this.selectedProduct = data;
        // console.log(this.selectedProduct)
        this.readAllProducts()
        this.selectedProduct = null;
    }
    createReview(product){
        console.log(this.newReview);

        let observable = this._httpService.createReview(this.newReview);
        observable.subscribe(data=>{
            console.log(data);
            product['reviews'].push(data);
            console.log('pushed review to product', product)
            this.updateProduct(product)
        })
      }
      updateProduct(product){
          let observable = this._httpService.updateProduct(product);
          observable.subscribe(data=>{
              console.log(data);
          })
    }

}
