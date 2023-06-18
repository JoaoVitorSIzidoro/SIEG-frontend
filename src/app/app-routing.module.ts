import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EgressoCrudComponent } from './views/egresso-crud/egresso-crud.component';
import { EgressoCreateComponent } from './components/egresso/egresso-create/egresso-create.component';
import { EgressoShowComponent } from './views/egresso-show/egresso-show.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "egressos", component: EgressoCrudComponent },
  { path: "egressos/create", component: EgressoCreateComponent },
  { path: "egressos/view", component: EgressoShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
