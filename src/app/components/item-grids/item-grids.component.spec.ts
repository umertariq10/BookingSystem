import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGridsComponent } from './item-grids.component';

describe('ItemGridsComponent', () => {
  let component: ItemGridsComponent;
  let fixture: ComponentFixture<ItemGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
