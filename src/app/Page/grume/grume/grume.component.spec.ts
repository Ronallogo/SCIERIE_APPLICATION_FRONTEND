import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumeComponent } from './grume.component';

describe('GrumeComponent', () => {
  let component: GrumeComponent;
  let fixture: ComponentFixture<GrumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
