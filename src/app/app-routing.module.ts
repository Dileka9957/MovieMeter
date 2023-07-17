import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TVSeriesComponent } from './tv-series/tv-series.component';
import { MovieDetailsComponent } from './movies/movie.details/movie.details.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies' ,pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent },
  { path: 'tv-series', component: TVSeriesComponent },
  { path: 'movies-detail', component: MovieDetailsComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
