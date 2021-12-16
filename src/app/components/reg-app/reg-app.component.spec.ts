import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAppComponent } from './reg-app.component';

describe('RegAppComponent', () => {
  let component: RegAppComponent;
  let fixture: ComponentFixture<RegAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
