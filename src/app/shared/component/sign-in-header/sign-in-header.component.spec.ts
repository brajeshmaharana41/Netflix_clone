import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInHeaderComponent } from './sign-in-header.component';

describe('SignInHeaderComponent', () => {
  let component: SignInHeaderComponent;
  let fixture: ComponentFixture<SignInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
