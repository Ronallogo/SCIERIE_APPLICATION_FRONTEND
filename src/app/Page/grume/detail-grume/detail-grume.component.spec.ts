import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrumeComponent } from './detail-grume.component';

describe('DetailGrumeComponent', () => {
  let component: DetailGrumeComponent;
  let fixture: ComponentFixture<DetailGrumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailGrumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailGrumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
