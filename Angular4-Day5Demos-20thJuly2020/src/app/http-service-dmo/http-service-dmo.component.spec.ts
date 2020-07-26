import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceDmoComponent } from './http-service-dmo.component';

describe('HttpServiceDmoComponent', () => {
  let component: HttpServiceDmoComponent;
  let fixture: ComponentFixture<HttpServiceDmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceDmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceDmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
