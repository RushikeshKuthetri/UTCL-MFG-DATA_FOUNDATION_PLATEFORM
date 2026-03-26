import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCloserangeComponent } from './control-closerange.component';

describe('ControlCloserangeComponent', () => {
  let component: ControlCloserangeComponent;
  let fixture: ComponentFixture<ControlCloserangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCloserangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlCloserangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
