import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PrimengModule } from './primeng.module';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    BookListComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
 
 providers:[
  ],
  exports:[
    CommonModule,
    LoginPageComponent,
    BookListComponent,
    BookDetailsComponent,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
})
export class SharedModule { }
