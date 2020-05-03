import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictDataComponent } from './district-data.component';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DistrictDataComponent', () => {
  let component: DistrictDataComponent;
  let fixture: ComponentFixture<DistrictDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [DistrictDataComponent],
      providers: [CovidDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('state can\'t be null', () => {
    fixture = TestBed.createComponent(DistrictDataComponent);
    component = fixture.componentInstance;
    component.stateName = 'Sikkim';
    fixture.detectChanges();
    let covidDataService = fixture.debugElement.injector.get(CovidDataService);
    covidDataService.getDistrictData().subscribe((data) => {
      let stateData = data[component.stateName];
      expect(stateData).not.toBeDefined();
    })
  })

  it('should get state data from covid data service', () => {
    fixture = TestBed.createComponent(DistrictDataComponent);
    component = fixture.componentInstance;
    component.stateName = 'Delhi';
    fixture.detectChanges();
    let covidDataService = fixture.debugElement.injector.get(CovidDataService);
    covidDataService.getDistrictData().subscribe((data) => {
      let stateData = data[component.stateName];
      expect(stateData).toBeDefined();
    })
  })
});
