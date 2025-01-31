import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrumeComponent } from './list-grume.component';

describe('ListGrumeComponent', () => {
  let component: ListGrumeComponent;
  let fixture: ComponentFixture<ListGrumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGrumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGrumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
