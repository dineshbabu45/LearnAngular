import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  title = 'angular-reddit';

  constructor() {
    this.articles=[new Article('Angular','http://angular.io',10),
                  new Article('Fullstack', 'http://fullstack.io', 2),
                  new Article('Angular Homepage', 'http://angular.io', 1),];
            }


  AddArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
     //console.log(`Adding article title: ${title.value} and link: ${link.value}`);
     return false;
}
sortedArticles(): Article[] {
   return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
   }
}