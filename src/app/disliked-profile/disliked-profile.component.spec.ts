import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedProfileComponent } from './disliked-profile.component';

describe('DislikedProfileComponent', () => {
  let component: DislikedProfileComponent;
  let fixture: ComponentFixture<DislikedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikedProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
