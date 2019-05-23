import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    newMovie : any;
    allMovies = [];
    average_rating: number;

    constructor(private _httpService: HttpService, private router : Router){
    }

  ngOnInit() {
      this.readAllMovies()
      this.newMovie = false;
      this.average_rating = 0;
  }
  initMovie(){
      console.log('inside initMovie')
      this.newMovie = {}
  }
  readAllMovies(){
    let observable = this._httpService.readAllMovies();
    observable.subscribe(data=>{
        console.log('all data:', data);
        console.log('reviews:', data['movies']);
        for(var i = 0; i<data['movies'].length; i++){
            if(data['movies'][i].reviews.length==0){
                this.average_rating = 0;
            } else {
                this.average_rating = 0;
                for (var j = 0; j<data['movies'][i].reviews.length;j++){
                    // console.log('j:', j)
                    // console.log('this is rating', data.['movies'][i].reviews[j].rating)
                    // console.log(typeof(data['movies'][i].reviews[j].stars))
                    this.average_rating += parseInt(data['movies'][i].reviews[j].stars)
                }
                this.average_rating = this.average_rating/data['movies'][i].reviews.length
                data['movies'][i]['average_rating'] = this.average_rating
            }
        }

        this.allMovies = data['movies'];
        console.log('allmovies:', this.allMovies)
    })
    }
    selectMovie(movie){
        this._httpService.selectMovie(movie)
    }
    invoke(data){
        // this.selectedProduct = data;
        // console.log(this.selectedProduct)
        this.readAllMovies()
        this.newMovie = null;
        this.router.navigate(['/movies'])
    }


}
