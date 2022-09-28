import { Component } from '@angular/core';
import { BookService } from '../bookservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'bm-booklist',
  templateUrl:'./booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
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
  constructor(private router:Router,private bookService: BookService,public _auth:AuthService){ }
  ngOnInit(): void{
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }
  
}
  