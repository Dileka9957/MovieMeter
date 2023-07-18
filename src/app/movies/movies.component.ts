import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService : MovieService , private router: Router){

  }

  ngOnInit(): void {
    this.movies = this.moviesService.getAllMovies();
  }

  getMovie(name: String){
    this.router.navigate(['movies-details', name]);
    console.log('name',name)
  }

}
