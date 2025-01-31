import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavitaillementListComponent } from './ravitaillement-list.component';

describe('RavitaillementListComponent', () => {
  let component: RavitaillementListComponent;
  let fixture: ComponentFixture<RavitaillementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RavitaillementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RavitaillementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
