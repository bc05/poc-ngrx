import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../../contracts/posts.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent implements OnInit {
  posts$!: Observable<IPosts[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
