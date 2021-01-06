export class Article {
    votes: number;
    title: string;
    link: string;
constructor(title: string,link: string,votes?: number){ //? is used because default to zero
this.link=link;
this.votes=votes||0;
this.title=title
}
voteUp():void {
    this.votes += 1;
   }
    voteDown():void {
     this.votes -= 1;
    }
// domain() is a utility function that extracts

domain(): string {
 try {
 // e.g. http://foo.com/path/to/bar
 const domainAndPath: string = this.link.split('//')[1];
 // e.g. foo.com/path/to/bar
 return domainAndPath.split('/')[0];
 } catch (err) {
 return null;
 }
 }
 }

