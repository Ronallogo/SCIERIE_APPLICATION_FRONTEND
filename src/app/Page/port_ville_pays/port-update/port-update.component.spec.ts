import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortUpdateComponent } from './port-update.component';

describe('PortUpdateComponent', () => {
  let component: PortUpdateComponent;
  let fixture: ComponentFixture<PortUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
