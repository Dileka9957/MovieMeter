import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { TvSeries } from '../tv-series.model';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit{
 tv: TvSeries | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const tvId = +params['id']; // "+" to convert the parameter to a number
      this.dataService.fetchTVSById(tvId)
        .subscribe((tv: TvSeries) => this.tv = tv);
    });
  }

}
