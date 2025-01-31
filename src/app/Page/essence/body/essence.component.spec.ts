import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceComponent } from './essence.component';

describe('EssenceComponent', () => {
  let component: EssenceComponent;
  let fixture: ComponentFixture<EssenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
