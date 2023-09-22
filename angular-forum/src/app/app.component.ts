import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forum';

  constructor(private router: Router){}

  redirectToPost(postId: number): void {
    // const id = Number.parseInt(postId);
    // console.log(postId , id);
    this.router.navigate(["/post", postId]);
  }
}
