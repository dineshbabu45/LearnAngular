import { HostBinding, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit { //OnIt is interface

  @Input() article:Article;
  // @HostBinding('attr.class') cssClass = 'row'; //another way to make content align row

 constructor() {

 }
 
//Js reload <a> tags on events
 voteUp():boolean {//boolean method to avoid reloading
 this.article.voteUp();
 return false;
}
 voteDown():boolean {
  this.article.voteDown();
 return false;
 }
//additional initializations to be done
 ngOnInit() {
 }
}
