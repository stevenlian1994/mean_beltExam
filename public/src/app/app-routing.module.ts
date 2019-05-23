import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    // { path: 'products', component: ProductsComponent, children: [
    //     { path: 'edit/:id', component: EditComponent },
    // ]} ,
    
    { path: 'movies', component: MoviesComponent, children: [
        { path: 'new', component: NewComponent },
    ] },
    { path: 'movies/:id/review', component: ReviewsComponent},
    { path: 'movies/:id', component: EditComponent},
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
