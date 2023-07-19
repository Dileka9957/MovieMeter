import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TvSeries } from './tv-series.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TVSeriesComponent {
  tv_series: TvSeries[] = [];

  constructor(private dataService : DataStorageService , private router: Router){
  }


  ngOnInit(): void {
    this.dataService.fetchTVs()
    .subscribe((tvs: TvSeries[]) => this.tv_series = tvs);
  }

  getTV(id: Number){
    this.router.navigate(['tv-series/tv-details', id]);
    console.log('id',id)
  }
}
