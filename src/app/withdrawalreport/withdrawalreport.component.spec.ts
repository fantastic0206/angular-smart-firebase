import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalreportComponent } from './withdrawalreport.component';

describe('WithdrawalreportComponent', () => {
  let component: WithdrawalreportComponent;
  let fixture: ComponentFixture<WithdrawalreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
