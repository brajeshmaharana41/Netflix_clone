import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOtpPageComponent } from './verify-otp-page.component';

describe('VerifyOtpPageComponent', () => {
  let component: VerifyOtpPageComponent;
  let fixture: ComponentFixture<VerifyOtpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyOtpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
