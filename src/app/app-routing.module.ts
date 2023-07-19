import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TVSeriesComponent } from './tv-series/tv-series.component';
import { MovieDetailsComponent } from './movies/movie.details/movie.details.component';
import { TvDetailsComponent } from './tv-series/tv-details/tv-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies' ,pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-series', component: TVSeriesComponent },
  { path: 'movies/movies-details/:id', component: MovieDetailsComponent },
  { path: 'tv-series/tv-details/:id',component:TvDetailsComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
