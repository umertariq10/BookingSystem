import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFrameComponent } from './components/main-frame/main-frame.component';
import {BookedItemsComponent} from './components/booked-items/booked-items.component';
import {LandingComponent} from './components/landing/landing.component';

const routes: Routes = [
  {path: '' , component: MainFrameComponent,
  children: [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: 'landing', component: LandingComponent},
    {path: 'booked-items' , component: BookedItemsComponent}
   /* {path: 'vehicle',
    component: VehicleComponent,
      data: {
      isVehicle: true,
      }
    },
    {path: 'room' ,
      component: RoomComponent,
      data: {
        isRoom: true,
      }
    }*/
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
