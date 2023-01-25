import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFooterComponent } from './signup-footer.component';

describe('SignupFooterComponent', () => {
  let component: SignupFooterComponent;
  let fixture: ComponentFixture<SignupFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
