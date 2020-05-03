import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Jagrati in footer', () => {
    const footerText = 'Jagrati';
    const footerToolBar = fixture.debugElement.query(By.css('.name'));
    expect(footerToolBar.nativeElement.textContent).toContain(footerText);
  });

  it('should change creater name as \'Test Goyal\'', () => {
    const creatorName: string = 'Test Goyal';
    component.creator = creatorName;
    fixture.detectChanges();
    const footerToolBar = fixture.debugElement.query(By.css('.name'));
    expect(footerToolBar.nativeElement.textContent).toContain(creatorName);
  });
});
