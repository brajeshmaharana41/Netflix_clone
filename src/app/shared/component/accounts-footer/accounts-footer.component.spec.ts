import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsFooterComponent } from './accounts-footer.component';

describe('AccountsFooterComponent', () => {
  let component: AccountsFooterComponent;
  let fixture: ComponentFixture<AccountsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
