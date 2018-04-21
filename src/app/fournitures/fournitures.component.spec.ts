import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournituresComponent } from './fournitures.component';

describe('FournituresComponent', () => {
  let component: FournituresComponent;
  let fixture: ComponentFixture<FournituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
