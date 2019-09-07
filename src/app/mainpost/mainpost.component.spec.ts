import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpostComponent } from './mainpost.component';

describe('MainpostComponent', () => {
  let component: MainpostComponent;
  let fixture: ComponentFixture<MainpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
