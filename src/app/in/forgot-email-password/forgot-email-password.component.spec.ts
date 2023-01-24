import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotEmailPasswordComponent } from './forgot-email-password.component';

describe('ForgotEmailPasswordComponent', () => {
  let component: ForgotEmailPasswordComponent;
  let fixture: ComponentFixture<ForgotEmailPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotEmailPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotEmailPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
