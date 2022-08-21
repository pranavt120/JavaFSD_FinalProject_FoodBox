import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCusineComponent } from './list-cusine.component';

describe('ListCusineComponent', () => {
  let component: ListCusineComponent;
  let fixture: ComponentFixture<ListCusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCusineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
