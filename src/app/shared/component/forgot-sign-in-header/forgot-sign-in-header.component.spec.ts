import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotSignInHeaderComponent } from './forgot-sign-in-header.component';

describe('ForgotSignInHeaderComponent', () => {
  let component: ForgotSignInHeaderComponent;
  let fixture: ComponentFixture<ForgotSignInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotSignInHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotSignInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
