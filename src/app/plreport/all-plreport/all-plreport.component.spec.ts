import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlreportComponent } from './all-plreport.component';

describe('AllPlreportComponent', () => {
  let component: AllPlreportComponent;
  let fixture: ComponentFixture<AllPlreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
