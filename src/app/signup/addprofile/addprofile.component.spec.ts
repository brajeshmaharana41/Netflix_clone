import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofileComponent } from './addprofile.component';

describe('AddprofileComponent', () => {
  let component: AddprofileComponent;
  let fixture: ComponentFixture<AddprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
