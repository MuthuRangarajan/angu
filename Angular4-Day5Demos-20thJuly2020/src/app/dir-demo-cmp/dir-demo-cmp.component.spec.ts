import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDemoCmpComponent } from './dir-demo-cmp.component';

describe('DirDemoCmpComponent', () => {
  let component: DirDemoCmpComponent;
  let fixture: ComponentFixture<DirDemoCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirDemoCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDemoCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
