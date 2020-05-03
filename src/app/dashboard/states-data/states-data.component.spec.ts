import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesDataComponent } from './states-data.component';
import { CovidDataService } from 'src/app/core/services/covid-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IStateDetails } from 'src/app/shared/interfaces/IStateDetails';

describe('StatesDataComponent', () => {
  let component: StatesDataComponent;
  let fixture: ComponentFixture<StatesDataComponent>;
  let stateData: IStateDetails[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [StatesDataComponent],
      providers: [CovidDataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get states data from covid data service', () => {
    let covidDataService = fixture.debugElement.injector.get(CovidDataService);
    covidDataService.getStatesData().subscribe((data) => {
      stateData = data["statewise"];
      expect(stateData.length).toBeGreaterThan(0);
    });
  });

  it('should contain state data of Delhi ', () => {
    let covidDataService = fixture.debugElement.injector.get(CovidDataService);
    covidDataService.getStatesData().subscribe((data) => {
      stateData = data["statewise"];
      expect(stateData.keys).toContain("Delhi");
    })
  })
});
