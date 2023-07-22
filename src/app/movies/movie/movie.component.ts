import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
movie: Movie;

  constructor(movie:Movie ){
    this.movie= movie
  }
  ngOnInit(): void {
  }

}
