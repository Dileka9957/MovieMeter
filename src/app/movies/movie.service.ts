import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies : Movie[]= [
    new Movie(
      'Spider Man Into the Spider Verse 2019',
      'Adventure',
      '14 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2020/03/Spider-Man-Into-the-Spider-Verse-2019-Movie-Free-Download-720p-BluRay.jpg"
    ),
    new Movie(
      'Aquaman 2018',
      'Adventure',
      '21 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2018/12/Aquaman-2018-Movie-Free-Download-720p-BluRay-1.jpg"
    ),
    new Movie(
      'Spider Man Into the Spider Verse 2019',
      'Adventure',
      '14 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2020/03/Spider-Man-Into-the-Spider-Verse-2019-Movie-Free-Download-720p-BluRay.jpg"
    ),
    new Movie(
      'Aquaman 2018',
      'Adventure',
      '21 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2018/12/Aquaman-2018-Movie-Free-Download-720p-BluRay-1.jpg"
    ),
    new Movie(
      'Spider Man Into the Spider Verse 2019',
      'Adventure',
      '14 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2020/03/Spider-Man-Into-the-Spider-Verse-2019-Movie-Free-Download-720p-BluRay.jpg"
    ),
    new Movie(
      'Aquaman 2018',
      'Adventure',
      '21 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2018/12/Aquaman-2018-Movie-Free-Download-720p-BluRay-1.jpg"
    ),
    new Movie(
      'Spider Man Into the Spider Verse 2019',
      'Adventure',
      '14 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2020/03/Spider-Man-Into-the-Spider-Verse-2019-Movie-Free-Download-720p-BluRay.jpg"
    ),
    new Movie(
      'Aquaman 2018',
      'Adventure',
      '21 December 2018',
      'English',
      "https://moviescounter.pw/wp-content/uploads/2018/12/Aquaman-2018-Movie-Free-Download-720p-BluRay-1.jpg"
    )
  ]


  getAllMovies(){
    return this.movies.map(movie=>({...movie}));
  }
}
