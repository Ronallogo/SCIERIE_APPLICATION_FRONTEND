import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavitaillementUpdateComponent } from './ravitaillement-update.component';

describe('RavitaillementUpdateComponent', () => {
  let component: RavitaillementUpdateComponent;
  let fixture: ComponentFixture<RavitaillementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavitaillementUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavitaillementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
