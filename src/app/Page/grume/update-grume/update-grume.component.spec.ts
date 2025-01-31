import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrumeComponent } from './update-grume.component';

describe('UpdateGrumeComponent', () => {
  let component: UpdateGrumeComponent;
  let fixture: ComponentFixture<UpdateGrumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGrumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGrumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
