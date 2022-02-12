import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNavigationComponent } from './top-navigation.component';
import {BookedItemsComponent} from "../../bookingSystemComponents/components/booked-items/booked-items.component";
import {MatDialog} from "@angular/material/dialog";
import {CategoriesService} from "../../bookingSystemComponents/service/categories.service";
import {DummyCategories} from "../../dumyData"
import {of} from "rxjs";


describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavigationComponent, BookedItemsComponent ],
      providers:[{ provide: MatDialog, useValue: {open: ()=> {}}},
        { provide: CategoriesService, useValue: {setCategories: ()=> {}, getCategories: ()=> of(()=> DummyCategories)}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
