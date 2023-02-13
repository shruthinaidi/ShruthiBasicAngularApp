import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedTransactionHistoryComponent } from './disliked-transaction-history.component';

describe('DislikedTransactionHistoryComponent', () => {
  let component: DislikedTransactionHistoryComponent;
  let fixture: ComponentFixture<DislikedTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikedTransactionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
