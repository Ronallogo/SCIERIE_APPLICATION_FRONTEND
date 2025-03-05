import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifChartComponent } from './tarif-chart.component';

describe('TarifChartComponent', () => {
  let component: TarifChartComponent;
  let fixture: ComponentFixture<TarifChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
