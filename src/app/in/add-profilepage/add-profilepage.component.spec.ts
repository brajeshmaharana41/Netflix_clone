import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilepageComponent } from './add-profilepage.component';

describe('AddProfilepageComponent', () => {
  let component: AddProfilepageComponent;
  let fixture: ComponentFixture<AddProfilepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfilepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfilepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
