import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEssenceStockComponent } from './chart-essence-stock.component';

describe('ChartEssenceStockComponent', () => {
  let component: ChartEssenceStockComponent;
  let fixture: ComponentFixture<ChartEssenceStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartEssenceStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartEssenceStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
