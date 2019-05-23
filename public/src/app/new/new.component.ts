import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    newProduct ={}

    constructor(private _httpService: HttpService){
    }

  ngOnInit() {
  }
  createProduct(){
      console.log(this.newProduct)
      let observable = this._httpService.createProduct(this.newProduct);
      observable.subscribe(data=>{
          console.log(data);
      })
  }

}
