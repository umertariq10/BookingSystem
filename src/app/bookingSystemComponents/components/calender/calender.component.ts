import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {BookingDate} from "../../models/item.model";

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  @Input() date!: BookingDate | null;
  @Input() isItemBooked!: boolean;
  @Output() dateEventEmitter = new EventEmitter<BookingDate>();
  dateFormGroup!: FormGroup;
  bookingDate!: BookingDate;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeDate();
  }

  /** will set the date, when calender is initialized */
  initializeDate(): void {
    this.dateFormGroup = new FormGroup({
      start: new FormControl(this.date && this.date.start ? new Date(this.date.start) : new Date()),
      end: new FormControl(this.date && this.date.end ? new Date(this.date.end) : new Date()),
    });
  }

  /** will update the date */
  onDateChange(): void {
    this.bookingDate = {
      start: this.dateFormGroup.controls.start.value?.toLocaleString().substring(0, 9),
      end: this.dateFormGroup.controls.end.value?.toLocaleString().substring(0, 9),
    };
    this.dateEventEmitter.emit(this.bookingDate);
  }
}
