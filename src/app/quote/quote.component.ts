import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote('Sarah','Do your best until your good is better and your better is best',new Date(20/8/2009)),
    new Quote('livingstone','Courage is to beat every odds in life',new Date(6/1/2000)),
    new Quote('Barrack Obama','Yes We Can',new Date(13/12/1996)),
  
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
