import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifListComponent } from './tarif-list.component';

describe('TarifListComponent', () => {
  let component: TarifListComponent;
  let fixture: ComponentFixture<TarifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
