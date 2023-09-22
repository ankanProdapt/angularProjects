import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  postId: number = 0;
  post?: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.getPost();
      this.addPaddingToComments();
    })
  }

  getPost() {
    this.postService.getPost(this.postId).subscribe(res => {
      this.post = res;
    });
  }

  addPaddingToComments() {
    setTimeout(function () {
      for (let i = 0; i < 10; i++) {
        var comments = document.getElementsByClassName(String(i));
        console.log(comments);
      }
    }, 10000);
  }
}
