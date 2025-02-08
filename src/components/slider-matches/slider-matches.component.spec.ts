import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMatchesComponent } from './slider-matches.component';

describe('SliderMatchesComponent', () => {
  let component: SliderMatchesComponent;
  let fixture: ComponentFixture<SliderMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderMatchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
