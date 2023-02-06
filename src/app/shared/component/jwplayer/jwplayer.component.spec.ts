import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwplayerComponent } from './jwplayer.component';

describe('JwplayerComponent', () => {
  let component: JwplayerComponent;
  let fixture: ComponentFixture<JwplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JwplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
