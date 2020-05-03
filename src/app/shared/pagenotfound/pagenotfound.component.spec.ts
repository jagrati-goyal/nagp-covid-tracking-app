import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoundComponent } from './pagenotfound.component';
import { By } from '@angular/platform-browser';

describe('PagenotfoundComponent', () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagenotfoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 404 on not found page', () => {
    const text = component.errorCode;
    const spanTag = fixture.debugElement.query(By.css('.error-code'));
    expect(spanTag.nativeElement.textContent).toContain(text);
  })
});
