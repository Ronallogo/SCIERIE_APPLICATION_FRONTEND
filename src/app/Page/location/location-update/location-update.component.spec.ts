import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationUpdateComponent } from './location-update.component';

describe('LocationUpdateComponent', () => {
  let component: LocationUpdateComponent;
  let fixture: ComponentFixture<LocationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
