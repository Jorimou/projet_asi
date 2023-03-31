import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablettesComponent } from './tablettes.component';

describe('TablettesComponent', () => {
  let component: TablettesComponent;
  let fixture: ComponentFixture<TablettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
