import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTrafficComponent } from './generate-traffic.component';

describe('GenerateTrafficComponent', () => {
  let component: GenerateTrafficComponent;
  let fixture: ComponentFixture<GenerateTrafficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTrafficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
