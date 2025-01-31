import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceCreationComponent } from './essence-creation.component';

describe('EssenceCreationComponent', () => {
  let component: EssenceCreationComponent;
  let fixture: ComponentFixture<EssenceCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssenceCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssenceCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
