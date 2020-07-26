import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAddComponent } from './dynamic-add.component';

describe('DynamicAddComponent', () => {
  let component: DynamicAddComponent;
  let fixture: ComponentFixture<DynamicAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
