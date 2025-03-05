import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifCreationComponent } from './tarif-creation.component';

describe('TarifCreationComponent', () => {
  let component: TarifCreationComponent;
  let fixture: ComponentFixture<TarifCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
