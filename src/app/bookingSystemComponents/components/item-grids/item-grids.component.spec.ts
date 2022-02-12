import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGridsComponent } from './item-grids.component';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

describe('ItemGridsComponent', () => {
  let component: ItemGridsComponent;
  let fixture: ComponentFixture<ItemGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemGridsComponent ],
      providers:[{provide: MatDialog, useValue: {}},
         { provide: MatSnackBar, useValue: {open:()=> {}} }]
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
