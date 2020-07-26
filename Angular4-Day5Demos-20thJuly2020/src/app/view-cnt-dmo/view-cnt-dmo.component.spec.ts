import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCntDmoComponent } from './view-cnt-dmo.component';

describe('ViewCntDmoComponent', () => {
  let component: ViewCntDmoComponent;
  let fixture: ComponentFixture<ViewCntDmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCntDmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCntDmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
