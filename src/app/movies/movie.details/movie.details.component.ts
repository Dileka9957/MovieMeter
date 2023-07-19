import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie.details',
  templateUrl: './movie.details.component.html',
  styleUrls: ['./movie.details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = +params['id']; // "+" to convert the parameter to a number
      this.dataService.fetchMovieById(movieId)
        .subscribe((movie: Movie) => this.movie = movie);
    });
  }
}
