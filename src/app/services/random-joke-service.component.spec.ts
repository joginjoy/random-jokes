import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokeServiceComponent } from './random-joke-service.component';

describe('RandomJokeServiceComponent', () => {
  let component: RandomJokeServiceComponent;
  let fixture: ComponentFixture<RandomJokeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomJokeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomJokeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
