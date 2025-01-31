import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortVillePaysComponent } from './port-ville-pays.component';

describe('PortVillePaysComponent', () => {
  let component: PortVillePaysComponent;
  let fixture: ComponentFixture<PortVillePaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortVillePaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortVillePaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
