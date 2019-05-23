import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    selectedMovie : any;
    newReview = {name: '', stars:5,content: ''};

    constructor(private _httpService: HttpService, private router : Router){
    }

  ngOnInit() {
      this.selectedMovie = this._httpService.getMovie();
      console.log('selected movie:', this.selectedMovie)
  }
  addReview(){
    console.log(this.newReview)
    this.selectedMovie.reviews.push(this.newReview)
    console.log(this.selectedMovie)
    let observable = this._httpService.updateMovie(this.selectedMovie);
    observable.subscribe(data=>{
        console.log(data);
        // this.updateAverage(movie)
        this.router.navigate(['/movies', this.selectedMovie._id])
    })
  }
  reroute(){
    this.router.navigate(['/movies', this.selectedMovie._id])
  }

}
