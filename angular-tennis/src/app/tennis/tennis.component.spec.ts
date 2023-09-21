import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisComponent } from './tennis.component';

describe('TennisComponent', () => {
  let component: TennisComponent;
  let fixture: ComponentFixture<TennisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TennisComponent]
    });
    fixture = TestBed.createComponent(TennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
