import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceListComponent } from './essence-list.component';

describe('EssenceListComponent', () => {
  let component: EssenceListComponent;
  let fixture: ComponentFixture<EssenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EssenceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
