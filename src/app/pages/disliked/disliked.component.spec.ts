import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedComponent } from './disliked.component';

describe('DislikedComponent', () => {
  let component: DislikedComponent;
  let fixture: ComponentFixture<DislikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
