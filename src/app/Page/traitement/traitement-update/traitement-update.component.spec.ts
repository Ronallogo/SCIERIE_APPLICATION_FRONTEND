import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementUpdateComponent } from './traitement-update.component';

describe('TraitementUpdateComponent', () => {
  let component: TraitementUpdateComponent;
  let fixture: ComponentFixture<TraitementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
