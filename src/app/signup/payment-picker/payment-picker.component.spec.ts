import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPickerComponent } from './payment-picker.component';

describe('PaymentPickerComponent', () => {
  let component: PaymentPickerComponent;
  let fixture: ComponentFixture<PaymentPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
