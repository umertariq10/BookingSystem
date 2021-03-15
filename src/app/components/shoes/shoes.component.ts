import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  slides = [{image : '/assets/slide-images/shoes1.jpg'},
    {image : '/assets/slide-images/shoes2.jpg'}];
  constructor() { }

  ngOnInit(): void {
  }

}
