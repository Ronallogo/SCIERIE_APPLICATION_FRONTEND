import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDashbordComponent } from './body-dashbord.component';

describe('BodyDashbordComponent', () => {
  let component: BodyDashbordComponent;
  let fixture: ComponentFixture<BodyDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyDashbordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
