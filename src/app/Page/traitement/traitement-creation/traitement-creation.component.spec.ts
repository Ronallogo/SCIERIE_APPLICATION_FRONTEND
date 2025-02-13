import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementCreationComponent } from './traitement-creation.component';

describe('TraitementCreationComponent', () => {
  let component: TraitementCreationComponent;
  let fixture: ComponentFixture<TraitementCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
