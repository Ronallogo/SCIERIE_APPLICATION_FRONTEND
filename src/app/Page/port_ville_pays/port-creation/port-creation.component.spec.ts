import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCreationComponent } from './port-creation.component';

describe('PortCreationComponent', () => {
  let component: PortCreationComponent;
  let fixture: ComponentFixture<PortCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
