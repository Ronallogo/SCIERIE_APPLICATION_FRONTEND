import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceUpdateComponent } from './essence-update.component';

describe('EssenceUpdateComponent', () => {
  let component: EssenceUpdateComponent;
  let fixture: ComponentFixture<EssenceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssenceUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssenceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
