import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote('Sarah','Daniel','The Most lethal weapon a human being can make is a team',new Date(20/12/2019)),
    new Quote('Daniel','Daniel','Its one thing to go to school to learn is another Expirience is one thing growth is another',new Date(12/1/2000)),
    new Quote('James','Barrack Obama','Yes We Can',new Date(13/12/1996)),
  
  ];

  delete(i) {
    this.quotes.splice(i, 1)
  }

  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.text=quote.text;
    quote.author=quote.author;
    quote.submitter=quote.submitter;
    quote.upvotes=quote.upvotes;
    quote.downvotes=quote.downvotes


    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
