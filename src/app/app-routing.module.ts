import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppLayoutComponent } from './Shared/Templates/app-layout/app-layout.component';


const routes: Routes = [ 
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'book-list'
      },
      {
         path: 'book-list', 
         component: BookListComponent 
      },

      { path: 'book-details', 
        component: BookDetailsComponent 
      },
    ]
    },
    {
      path: 'login',
      component: LoginPageComponent
    },

  // { path: 'login-page', component: LoginPageComponent },
  // { path: 'book-list', component: BookListComponent },
  // { path: 'book-details', component: BookDetailsComponent },
  // {path: '', redirectTo: '/login-page', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
