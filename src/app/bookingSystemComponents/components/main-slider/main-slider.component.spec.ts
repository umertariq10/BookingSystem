import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainSliderComponent } from './main-slider.component';
import {MaterialModule} from "../../../../material/material.module";

describe('MainSliderComponent', () => {
  let component: MainSliderComponent;
  let fixture: ComponentFixture<MainSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSliderComponent ],
      imports: [
        MaterialModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
