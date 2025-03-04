import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumeChartComponent } from './grume-chart.component';

describe('GrumeChartComponent', () => {
  let component: GrumeChartComponent;
  let fixture: ComponentFixture<GrumeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrumeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrumeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
