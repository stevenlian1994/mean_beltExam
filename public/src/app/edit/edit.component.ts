import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @Input() updatedProduct: any; 

    @Output() myEventEmitter = new EventEmitter();

    updatedProduct2 : any;
    constructor(private _httpService: HttpService){
    }
  ngOnInit() {
      console.log('hi in edit', this.updatedProduct)
      this.updatedProduct2 = {_id: this.updatedProduct._id, 
        title: this.updatedProduct.title, 
        price: this.updatedProduct.price, 
        image_url: this.updatedProduct.image_url, 
    }
  }
  updateProduct(){
      console.log(this.updatedProduct2)
        let observable = this._httpService.updateProduct(this.updatedProduct2);
        observable.subscribe(data=>{
            console.log(data);
            console.log('before emitting:', this.updatedProduct2)
            this.myEventEmitter.emit(this.updatedProduct2);
        })
  }
}
