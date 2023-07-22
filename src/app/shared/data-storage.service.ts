import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../movies/movie.model';
import { catchError, map, tap } from 'rxjs/operators';
import { TvSeries } from '../tv-series/tv-series.model';
import { Movie_Review } from '../movies/movie-review.model';


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
      return this.http.get<Movie>(`https://movie-store-a5b55-default-rtdb.firebaseio.com/movies/${id-1}.json`)
      ;
    }

    fetchTVSById(id: number) {
      return this.http.get<TvSeries>(`https://movie-store-a5b55-default-rtdb.firebaseio.com/tv/${id-1}.json`);
    }

    submitReview(username: string, comment: string ,rating:Number) {
      const movieReview = {username, comment ,rating};

      this.http.post<Movie_Review>('https://movie-store-a5b55-default-rtdb.firebaseio.com/movie-reviews.json', movieReview)
       .subscribe(reponseData =>{
        console.log(reponseData)
       }

       )
    }


      fetchReviewsbymovieID(){
        return this.http.get<Movie_Review[]>(`https://movie-store-a5b55-default-rtdb.firebaseio.com/movie-reviews.json`
        ).pipe(
          map(reviews => {
            return reviews.map(Movie_Review => {
              // console.log(reviews)
              return {
                ...Movie_Review,
              };
            });
          }),
          )
      }

}


