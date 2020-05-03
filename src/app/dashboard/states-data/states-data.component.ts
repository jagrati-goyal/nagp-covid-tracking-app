import { Component, OnInit } from '@angular/core';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { IStateDetails } from 'src/app/shared/interfaces/IStateDetails';

@Component({
  selector: 'app-states-data',
  templateUrl: './states-data.component.html',
  styleUrls: ['./states-data.component.css']
})
export class StatesDataComponent implements OnInit {
  statesData: IStateDetails[];

  constructor(private covidDataService: CovidDataService) { }

  ngOnInit(): void {
    this.covidDataService.getStatesData().subscribe((data) => {
      this.statesData = data["statewise"];
      this.statesData = this.statesData.sort((a, b): number => {
        if (+a.confirmed < +b.confirmed) return -1;
        if (+a.confirmed > +b.confirmed) return 1;
        return 0;
      });
      return data["statewise"];
    });
  }

}
