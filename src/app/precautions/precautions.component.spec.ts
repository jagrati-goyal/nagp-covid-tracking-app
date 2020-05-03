import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionsComponent } from './precautions.component';
import { PrecautionService } from '../core/services/precautions.service';
import { By } from '@angular/platform-browser';

describe('PrecautionsComponent', () => {
  let component: PrecautionsComponent;
  let fixture: ComponentFixture<PrecautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrecautionsComponent],
      providers: [PrecautionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from the precaution service', () => {
    let precautionService = fixture.debugElement.injector.get(PrecautionService);
    component.precautions = precautionService.getAllPrecautions();
    fixture.detectChanges();
    expect(component.precautions).toBeDefined();
  });

  it('Should contain Protect yourself at precaution page', () => {
    const spanData = fixture.debugElement.query(By.css('.textData'));
    expect(spanData.nativeElement.textContent).toContain("Protect yourself");
  })
});
