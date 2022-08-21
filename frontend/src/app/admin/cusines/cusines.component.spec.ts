import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusinesComponent } from './cusines.component';

describe('CusinesComponent', () => {
  let component: CusinesComponent;
  let fixture: ComponentFixture<CusinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
