import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TvSeries } from './tv-series.model';
import { TvSeriesService } from './tv-series.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TVSeriesComponent {
  tv_series: TvSeries[] = [];

  constructor(private tvService : TvSeriesService , private router: Router){

  }

  ngOnInit(): void {
    this.tv_series = this.tvService.getAllTvSeries();
  }

  getTV(name: String){
    this.router.navigate(['tv-details', name]);
    console.log('name',name)
  }
}
