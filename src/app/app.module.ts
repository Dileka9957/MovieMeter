import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { TVSeriesComponent } from './tv-series/tv-series.component';
import { MovieDetailsComponent } from './movies/movie.details/movie.details.component';
import { TvDetailsComponent } from './tv-series/tv-details/tv-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    TVSeriesComponent,
    MovieDetailsComponent,
    TvDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
