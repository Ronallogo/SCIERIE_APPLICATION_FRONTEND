import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavitaillementComponent } from './ravitaillement.component';

describe('RavitaillementComponent', () => {
  let component: RavitaillementComponent;
  let fixture: ComponentFixture<RavitaillementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavitaillementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavitaillementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
