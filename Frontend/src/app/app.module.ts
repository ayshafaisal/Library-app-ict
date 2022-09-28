import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './newbook/newbook.component';
import {BookService} from './bookservice.service';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HomeComponent } from './home/home.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NewBookComponent,
    LoginComponent,
    UpdateBookComponent,
    UserloginComponent,
    HomeComponent,
    BooklistComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,AuthGuard,BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
