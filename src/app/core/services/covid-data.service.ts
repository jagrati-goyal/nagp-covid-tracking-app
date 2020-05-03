import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStateDetails } from 'src/app/shared/interfaces/IStateDetails';
import { IState } from 'src/app/shared/interfaces/IState';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CovidDataService {

    constructor(private http: HttpClient) { }

    getStatesData(): Observable<any> {
        return this.http.get("https://api.covid19india.org/data.json");
    }

    getDistrictData(): Observable<any> {
        return this.http.get("https://api.covid19india.org/state_district_wise.json");
    }

}