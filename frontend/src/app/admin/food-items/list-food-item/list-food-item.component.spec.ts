import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodItemComponent } from './list-food-item.component';

describe('ListFoodItemComponent', () => {
  let component: ListFoodItemComponent;
  let fixture: ComponentFixture<ListFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFoodItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
