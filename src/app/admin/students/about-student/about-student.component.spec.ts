import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStudentComponent } from './about-student.component';

describe('AboutStudentComponent', () => {
  let component: AboutStudentComponent;
  let fixture: ComponentFixture<AboutStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
