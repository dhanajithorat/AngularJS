import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { Post } from '../posts/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:Post;

  constructor(private route:ActivatedRoute, 
    private postService:PostService, 
    private location:Location) { }

  ngOnInit() {
    this.getPostDetail();
  }

  getPostDetail(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostDetail(id).subscribe(post => {
      this.post = post;
    });
  }

  goBack():void{
    this.location.back();
  }
}

