import {Item} from './item.model';

export interface Categories extends UniqueCategory {
  items: Item[];
  sliderImage: SliderImage[];
}

export interface SliderImage {
  image: string;
}

export interface UniqueCategory {
  id: string;
  name: string;
}
