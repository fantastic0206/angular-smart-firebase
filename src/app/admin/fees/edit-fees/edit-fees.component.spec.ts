import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeesComponent } from './edit-fees.component';

describe('EditFeesComponent', () => {
  let component: EditFeesComponent;
  let fixture: ComponentFixture<EditFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
