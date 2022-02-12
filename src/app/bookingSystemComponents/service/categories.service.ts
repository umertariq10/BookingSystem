import {Injectable} from '@angular/core';
import {Categories} from '../models/categories.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories$ = new BehaviorSubject<any>([]);
  category!: Categories[];
  constructor() {
  }

  /** will set the new Categories in observable to update categories */
  setCategories(category: any): void {
    this.category = category;
    this.categories$.next(this.category);
  }

  /** returning Object of Categories along all items. */
  getCategories(): Observable<any> {
    return this.categories$.asObservable();
  }

  /** will update item in category object */
  updateCategories(categories: Categories[], selectedItem: Item): void{
    const filterSelectedCategory: Categories = categories.filter((category: Categories) => category.name === selectedItem.category)[0];
    filterSelectedCategory.items = filterSelectedCategory.items.map((item: Item) => item.id === selectedItem.id ? selectedItem : item);
    const updatedCategory = categories.map((category) => category.id === filterSelectedCategory.id ? filterSelectedCategory : category);
    this.setCategories(updatedCategory);
  }

}
