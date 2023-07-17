import { Component } from '@angular/core';
import { TvSeries } from './tv-series.model';
import { TvSeriesService } from './tv-series.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TVSeriesComponent {
  tv_series: TvSeries[] = [];

  constructor(private tvService : TvSeriesService){

  }

  ngOnInit(): void {
    this.tv_series = this.tvService.getAllTvSeries();
  }

}
