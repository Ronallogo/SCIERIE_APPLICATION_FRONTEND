import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurCreationComponent } from './fournisseur-creation.component';

describe('FournisseurCreationComponent', () => {
  let component: FournisseurCreationComponent;
  let fixture: ComponentFixture<FournisseurCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FournisseurCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseurCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
