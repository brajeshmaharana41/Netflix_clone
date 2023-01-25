import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHeaderComponent } from './signup-header.component';

describe('SignupHeaderComponent', () => {
  let component: SignupHeaderComponent;
  let fixture: ComponentFixture<SignupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
