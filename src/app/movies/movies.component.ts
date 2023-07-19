import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from './movie.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private dataService : DataStorageService , private router: Router){
  }

  ngOnInit(): void {
    this.dataService.fetchMovies()
    .subscribe((movies: Movie[]) => this.movies = movies);
  }

  getMovie(id: Number){
    this.router.navigate(['movies/movies-details', id]);
    console.log('id',id)
  }

}
