import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    // @Input() updatedProduct: any; 
    // @Output() myEventEmitter = new EventEmitter();
    selectedMovie : any;
    // updatedProduct2 : any;
    constructor(private _httpService: HttpService, private router : Router){
    }

  ngOnInit() {
      this.selectedMovie = this._httpService.getMovie()
      console.log('inside, edit:', this.selectedMovie)
    //   console.log('hi in edit', this.updatedProduct)
    //   this.updatedProduct2 = {_id: this.updatedProduct._id, 
    //     title: this.updatedProduct.title, 
    //     price: this.updatedProduct.price, 
    //     image_url: this.updatedProduct.image_url, 
    }
    deleteMovie(){
        let observable = this._httpService.deleteMovie(this.selectedMovie);
        observable.subscribe(data=>{
            console.log(data);
            this.router.navigate(['/'])
            // console.log('inside review', this.selectedMovie)
        })
    }
    deleteReview(review){
        console.log(review);
        this.selectedMovie.reviews.splice(this.selectedMovie.reviews.indexOf(review), 1)

        let observable = this._httpService.updateMovie(this.selectedMovie);
        observable.subscribe(data=>{
            console.log(data);
          //   this.updateAverage(product)
        })

    }
//   }
//   updateProduct(){
//       console.log(this.updatedProduct2)
//         let observable = this._httpService.updateProduct(this.updatedProduct2);
//         observable.subscribe(data=>{
//             console.log(data);
//             console.log('before emitting:', this.updatedProduct2)
//             this.myEventEmitter.emit(this.updatedProduct2);
//         })
//   }
}
