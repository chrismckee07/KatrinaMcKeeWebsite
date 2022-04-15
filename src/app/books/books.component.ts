import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public booksTitle: string

  constructor() { 
    this.booksTitle = "Check out these exciting books, available now!";
  }

  ngOnInit(): void {
  }

}
