import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationGrumeComponent } from './creation-grume.component';

describe('CreationGrumeComponent', () => {
  let component: CreationGrumeComponent;
  let fixture: ComponentFixture<CreationGrumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationGrumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationGrumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
