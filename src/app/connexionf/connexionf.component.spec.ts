import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionfComponent } from './connexionf.component';

describe('ConnexionfComponent', () => {
  let component: ConnexionfComponent;
  let fixture: ComponentFixture<ConnexionfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
