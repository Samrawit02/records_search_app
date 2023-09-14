import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAutocompleteComponent } from './search-autocomplete/search-autocomplete.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list/user-list.component';

const routes: Routes = [
  {path: 'all-records', component: UserListComponent},
  {path: 'create-records', component: UserFormComponent},
  {path: 'search', component: SearchAutocompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
