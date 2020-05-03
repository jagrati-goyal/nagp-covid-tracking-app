import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IState } from 'src/app/shared/interfaces/IState';
import { IDistrict } from 'src/app/shared/interfaces/IDistrict';

@Component({
  selector: 'app-district-data',
  templateUrl: './district-data.component.html',
  styleUrls: ['./district-data.component.css']
})
export class DistrictDataComponent implements OnInit {
  stateName: string;
  stateData: IState;
  keys: string[];
  districtsData: IDistrict[];
  noData: string;

  constructor(private covidDataService: CovidDataService,
    private activatedRoute: ActivatedRoute, private route: Router) {
    console.log("District module loaded");
  }

  ngOnInit(): void {
    this.stateName = this.activatedRoute.snapshot.params.state;
    if (this.stateName !== 'Total') {
      this.covidDataService.getDistrictData().subscribe((data) => {
        this.stateData = data[this.stateName];
        console.log(this.stateData);
        if (this.stateData !== undefined) {
          this.keys = Object.keys(this.stateData.districtData);
          this.districtsData = this.stateData.districtData;
          this.noData = "";
        } else {
          this.noData = "No data available for this state..!!";
        }
      });
    }
  }

}
