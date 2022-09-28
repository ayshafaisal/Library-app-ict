import { Component } from '@angular/core';
import { BookService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'bm-books',
  templateUrl:'./books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  pageTitle: string = 'Book List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  books=[{
    bookId :'',
    bookName:'',
    authorName:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private bookService: BookService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
 
  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['update']);

  }
  deleteBook(book:any)
  {
    this.bookService.deleteBook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(b => b !== book);
      })
  

  }
}
  