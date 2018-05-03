import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: Post;
  posts: Post[];

  constructor(private postService:PostService ) { }

  ngOnInit() {
    this.getPosts();
    console.log('initializing the post object.');
    this.post = { id: 0, title: 'title', body: 'Body', userId: 0 };
    console.log(this.post);
  }
  
  getPosts(){
    //call the post servive to get the posts
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost(){
    //Call the post servier to add the post
    console.log('Calling addPost.');
    this.postService.addPost(this.post).subscribe(post => {
      console.log(post);
    });
  }
}