import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    @Input() newMovie: any;
    @Output() myEventEmitter = new EventEmitter();
    // newMovie :  {title: '','reviews': []}
    newReview = {name: '', stars:5, content: ''};
    titleRequired = false;

    constructor(private _httpService: HttpService, private router : Router){
    }

  ngOnInit() {
      this.newMovie ={title: '', 'reviews': []}
  }
//   createProduct(){
//       console.log(this.newProduct)
//       let observable = this._httpService.createProduct(this.newProduct);
//       observable.subscribe(data=>{
//           console.log(data);
//       })
//   }
  createMovie(){
    // console.log(this.newMovie)
    // console.log(this.newReview)
    //add review to movie
    console.log(this.newReview['name'].length)
    if(this.newReview['name'].length<3){
        this.titleRequired = true;
    } else {
        this.newMovie['reviews'].push(this.newReview)
        console.log('before service query:', this.newMovie)
        let observable = this._httpService.createMovie(this.newMovie);
        observable.subscribe(data=>{
            console.log(data);
            // movie['reviews'].push(data);
            // console.log('pushed review to product', movie)
            // this.updateProduct(movie)
            // this.newMovie = false;
            this.myEventEmitter.emit(this.newMovie);
            // this.router.navigate(['/'])
        })
    }
    }
    cancelNew(){
        this.myEventEmitter.emit(this.newMovie);
    }

    //to hide comp:
}



