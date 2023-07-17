import { Injectable } from '@angular/core';
import { TvSeries } from './tv-series.model';

@Injectable({
  providedIn: 'root'
})
export class TvSeriesService {

  private tv_series : TvSeries[]= [
    new TvSeries(
      'The 100',
      'Action,Drama',
      'March 19, 2014',
      'English',
      "https://i.pinimg.com/originals/a3/60/72/a360728a71d61a54d2ed6ab7570f113e.jpg"
    ),
    new TvSeries(
      'Game Of Thrones',
      'Action,Adeventure',
      'April 17, 2011',
      'English',
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
    ),
    new TvSeries(
      'The 100',
      'Action,Drama',
      'March 19, 2014',
      'English',
      "https://i.pinimg.com/originals/a3/60/72/a360728a71d61a54d2ed6ab7570f113e.jpg"
    ),
    new TvSeries(
      'Game Of Thrones',
      'Action,Adeventure',
      'April 17, 2011',
      'English',
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
    ),
    new TvSeries(
      'The 100',
      'Action,Drama',
      'March 19, 2014',
      'English',
      "https://i.pinimg.com/originals/a3/60/72/a360728a71d61a54d2ed6ab7570f113e.jpg"
    ),
    new TvSeries(
      'Game Of Thrones',
      'Action,Adeventure',
      'April 17, 2011',
      'English',
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
    ),
    new TvSeries(
      'The 100',
      'Action,Drama',
      'March 19, 2014',
      'English',
      "https://i.pinimg.com/originals/a3/60/72/a360728a71d61a54d2ed6ab7570f113e.jpg"
    ),
    new TvSeries(
      'Game Of Thrones',
      'Action,Adeventure',
      'April 17, 2011',
      'English',
      "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
    ),
  ]


  getAllTvSeries(){
    return this.tv_series.map(tv_show=>({...tv_show}));
  }
}
