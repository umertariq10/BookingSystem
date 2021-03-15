import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
   isShoes = false;
   isClothes = false;
   isHome = false;


  constructor(  private router: Router,
                private activatedRoute: ActivatedRoute ){

    this.router.events.subscribe(() => this.isShoes = this.activatedRoute.snapshot.firstChild?.data.isShoes );
    this.router.events.subscribe(() => this.isClothes = this.activatedRoute.snapshot.firstChild?.data.isClothes );
    this.router.events.subscribe(() => this.router.url.length === 1 ? this.isHome = true : this.isHome = false);

  }

  ngOnInit(): void {
  }
  routing(link: string): void{
    this.router.navigateByUrl(`/${link}`);
  }

}
