import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpopularComponent } from './newpopular.component';

describe('NewpopularComponent', () => {
  let component: NewpopularComponent;
  let fixture: ComponentFixture<NewpopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
