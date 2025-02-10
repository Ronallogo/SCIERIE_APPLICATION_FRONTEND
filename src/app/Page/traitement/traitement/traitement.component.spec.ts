import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementComponent } from './traitement.component';

describe('TraitementComponent', () => {
  let component: TraitementComponent;
  let fixture: ComponentFixture<TraitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
