import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortablesComponent } from './portables.component';

describe('PortablesComponent', () => {
  let component: PortablesComponent;
  let fixture: ComponentFixture<PortablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
