import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patents } from './patents';

describe('Patents', () => {
  let component: Patents;
  let fixture: ComponentFixture<Patents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Patents],
    }).compileComponents();

    fixture = TestBed.createComponent(Patents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
