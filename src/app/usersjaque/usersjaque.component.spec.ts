import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersjaqueComponent } from './usersjaque.component';

describe('UsersjaqueComponent', () => {
  let component: UsersjaqueComponent;
  let fixture: ComponentFixture<UsersjaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersjaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersjaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
