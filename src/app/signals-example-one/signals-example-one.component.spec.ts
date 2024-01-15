import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsExampleOneComponent } from './signals-example-one.component';

describe('SignalsExampleOneComponent', () => {
  let component: SignalsExampleOneComponent;
  let fixture: ComponentFixture<SignalsExampleOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsExampleOneComponent]
    });
    fixture = TestBed.createComponent(SignalsExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
