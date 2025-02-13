import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementListComponent } from './traitement-list.component';

describe('TraitementListComponent', () => {
  let component: TraitementListComponent;
  let fixture: ComponentFixture<TraitementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraitementListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
