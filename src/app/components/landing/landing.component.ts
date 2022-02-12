import {Component, OnInit} from '@angular/core';

import {Categories, SliderImage, UniqueCategory} from '../../bookingSystemComponents/models/categories.model';
import {CategoriesService} from '../../bookingSystemComponents/service/categories.service';
import {Item} from '../../bookingSystemComponents/models/item.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  categories!: Categories[];
  allCategoryName!: UniqueCategory[];
  activeCategoryItems!: Item[];
  activeCategory!: string;
  sliderImages!: SliderImage[];

  constructor(private categoryService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((category) => this.categories = category);
    this.setAllCategoryName();
  }

  /** setting category Names so we can supply it to side navigation. */
  setAllCategoryName(): void {
    this.allCategoryName = this.categories.map((category: Categories) => ({name: category.name, id: category.id}));
  }

  /** will set the active Category on user selection. */
  setActiveCategory(selectedOption: UniqueCategory): void {
    const selectedCategory = this.categories.filter((category) =>
      category.name === selectedOption.name && category.id === selectedOption.id)[0];

    // if selected category is null it means home component need to load.
    if (!selectedCategory) {
      this.onHomeSelection();

    } else {
      this.activeCategory = selectedCategory.name;
      this.activeCategoryItems = selectedCategory.items;
      this.sliderImages = selectedCategory.sliderImage;
    }
  }

  /** on Home selection we will set activeCategory to null. So the home component can load.*/
  onHomeSelection(): void {
    this.activeCategory = '';
    this.activeCategoryItems = [];
    this.sliderImages = [];
  }

}
