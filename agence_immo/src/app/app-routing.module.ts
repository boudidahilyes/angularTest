import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ResidencesComponent } from './Residences/residences/residences.component';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceDetailsComponent } from './Residences/residence-details/residence-details.component';
const routes: Routes = [
  {path: 'home' ,component: HomeComponent},
  {path: 'residence', component: ResidencesComponent},
  {path:'residencedetails/:id' , data:{id:'id'}, component:ResidenceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
