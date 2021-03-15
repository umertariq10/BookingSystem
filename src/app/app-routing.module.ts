import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ShoesComponent } from './components/shoes/shoes.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';

const routes: Routes = [
  {path: '' , component: MainFrameComponent,
  children: [
    {path: 'clothes',
    component: ClothesComponent,
      data: {
      isClothes: true,
      }
    },
    {path: 'shoes' ,
      component: ShoesComponent,
      data: {
        isShoes: true,
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
