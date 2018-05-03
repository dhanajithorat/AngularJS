import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Http } from '@angular/http';
import { Post } from './posts/post';

@Injectable()
export class PostService {

  constructor(private messageService: MessageService, private http: Http) { }

  getPosts(){
    this.messageService.add('PostService: getting posts from jsonplaceholder');
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
    .map(x => x.json());
  }

  getPostDetail(id:number)
  {
    this.messageService.add('PostService: getting post details for ' + id + ' from jsonplaceholder');
    return this.http.get('http://jsonplaceholder.typicode.com/posts/' + id)
    .map(x => x.json());
  }

  addPost(post:Post)
  {
    this.messageService.add('PostService: adding a post to the jsonplaceholder');
    console.log(post);
    return this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify(post),)
    .map(x => x.json());
  }  

}
