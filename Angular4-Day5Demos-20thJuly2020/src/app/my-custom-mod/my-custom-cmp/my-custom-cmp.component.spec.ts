import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomCmpComponent } from './my-custom-cmp.component';

describe('MyCustomCmpComponent', () => {
  let component: MyCustomCmpComponent;
  let fixture: ComponentFixture<MyCustomCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
