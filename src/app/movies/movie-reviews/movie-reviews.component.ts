import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Movie_Review } from '../movie-review.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `

<div class="reviews-container">
  <div *ngFor="let review of movie_reviews" class="review-item">
    <p class="comment">{{ review.comment }}</p>
    <div class="user-rating">
      <p class="username">{{ review.username }}</p>
      <p class="rating">Rating: {{ review.rating }}</p>
    </div>
  </div>
</div>

  `,
  styleUrls: ['./movie-reviews.component.scss']
})
export class MovieReviewsComponent  implements OnInit {
route: ActivatedRoute = inject(ActivatedRoute);
dataService: DataStorageService = inject(DataStorageService);
movie_reviews: Movie_Review [] = [];


  constructor() {}

  ngOnInit(): void {
    // const movieId = Number(this.route.snapshot.params['id']);
   this.dataService.fetchReviewsbymovieID().subscribe(
      (movieReviews: Movie_Review[]) => {
        this.movie_reviews = movieReviews;
      },
      (err: any) => {
        console.log(err);
      }
    );

  }


}
