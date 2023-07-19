import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { map, tap } from 'rxjs/operators';
import { TvSeries } from '../tv-series/tv-series.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient) {}

   fetchMovies(){
    // const movies = this.movieService.getMovies();
    return this.http.get<Movie[]>('https://movie-store-a5b55-default-rtdb.firebaseio.com/movies.json'
        ).pipe(
          map(movies => {
            return movies.map(movie => {
              return {
                ...movie,
              };
            });
          }),
          // tap(movies => {
          //   this.movieService.setMovies(movies);
          // })
        )
   }

   fetchTVs(){
    return this.http.get<TvSeries[]>('https://movie-store-a5b55-default-rtdb.firebaseio.com/tv.json'
    ).pipe(
      map(tvs => {
        return tvs.map(TvSeries => {
          return {
            ...TvSeries,
          };
        });
      }),
      )
    }


    fetchMovieById(id: number) {
      return this.http.get<Movie>(`https://movie-store-a5b55-default-rtdb.firebaseio.com/movies/${id-1}.json`);
    }

    fetchTVSById(id: number) {
      return this.http.get<TvSeries>(`https://movie-store-a5b55-default-rtdb.firebaseio.com/tv/${id-1}.json`);
    }

}


