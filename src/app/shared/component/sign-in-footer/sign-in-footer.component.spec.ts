import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInFooterComponent } from './sign-in-footer.component';

describe('SignInFooterComponent', () => {
  let component: SignInFooterComponent;
  let fixture: ComponentFixture<SignInFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
