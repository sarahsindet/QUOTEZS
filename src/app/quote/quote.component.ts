import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  
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
