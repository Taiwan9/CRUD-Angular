import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './page/users/user-form/user-form.component';
import { UsersListComponent } from './page/users/users-list/users-list.component';

const routes: Routes = [
  {path: '', component:UsersListComponent},
  {path: 'form', component: UserFormComponent},
  {path: 'form/:id', component: UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
