import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedAddressComponent } from './disliked-address.component';

describe('DislikedAddressComponent', () => {
  let component: DislikedAddressComponent;
  let fixture: ComponentFixture<DislikedAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikedAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
