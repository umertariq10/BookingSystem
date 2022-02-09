import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {BookedItemsComponent} from "../components/booked-items/booked-items.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatSnackBar, useValue: {} }]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
