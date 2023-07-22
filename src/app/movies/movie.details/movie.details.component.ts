import { Component, OnInit, inject } from '@angular/core';
import { Movie } from '../movie.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup ,FormControl ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieReviewsComponent } from "../movie-reviews/movie-reviews.component";

@Component({
    selector: 'app-movie.details',
    standalone: true,
    templateUrl: './movie.details.component.html',
    styleUrls: ['./movie.details.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, MovieReviewsComponent]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  route: ActivatedRoute= inject(ActivatedRoute);
  dataService : DataStorageService = inject(DataStorageService);
  selectedRating: number = 0;
  applyForm = new FormGroup({
    username:new FormControl(''),
    comment:new FormControl(''),
    rating: new FormControl()
  });

  constructor() { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log("params",this.route.params)
      const movieId = +params['id']; // "+" to convert the parameter to a number
      this.dataService.fetchMovieById(movieId)
        .subscribe((movie: Movie) =>{
          this.movie = movie
        })
    });
  }


  updateRating(rating: number) {
    this.selectedRating = rating;
    // console.log(this.selectedRating)
  }
  submitApplication(){
    this.dataService.submitReview(
      this.applyForm.value.username ?? '',
      this.applyForm.value.comment ?? '',
      this.applyForm.value.rating ?? ''
    )
  }
}
