import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedTaskComponent } from './disliked-task.component';

describe('DislikedTaskComponent', () => {
  let component: DislikedTaskComponent;
  let fixture: ComponentFixture<DislikedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikedTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
