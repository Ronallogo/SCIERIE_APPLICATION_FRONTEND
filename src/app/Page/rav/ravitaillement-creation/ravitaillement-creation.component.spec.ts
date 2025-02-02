import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavitaillementCreationComponent } from './ravitaillement-creation.component';

describe('RavitaillementCreationComponent', () => {
  let component: RavitaillementCreationComponent;
  let fixture: ComponentFixture<RavitaillementCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavitaillementCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavitaillementCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
