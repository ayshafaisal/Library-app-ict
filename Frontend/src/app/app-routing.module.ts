import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { BooklistComponent } from './booklist/booklist.component'
import { NewBookComponent } from './newbook/newbook.component';
import {LoginComponent} from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'booklist',
    component: BooklistComponent
  },
  {
    path: 'userlogin',
    component: UserloginComponent
  },
  {
    path: 'userregister',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewBookComponent,
},
{
  path:'update',
  component:UpdateBookComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
