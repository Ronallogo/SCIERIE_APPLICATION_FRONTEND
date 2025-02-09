import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavChartComponent } from './rav-chart.component';

describe('RavChartComponent', () => {
  let component: RavChartComponent;
  let fixture: ComponentFixture<RavChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
