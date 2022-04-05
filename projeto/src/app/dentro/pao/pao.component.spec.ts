import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaoComponent } from './pao.component';

describe('PaoComponent', () => {
  let component: PaoComponent;
  let fixture: ComponentFixture<PaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
