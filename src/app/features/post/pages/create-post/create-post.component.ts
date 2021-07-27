import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromPostReducer from '../../store/post.reducer';
import { addPost } from '../../store/post.actions';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  posts$: Observable<fromPostReducer.PostState>;

  constructor(private store: Store<any>) {
    this.posts$ = store.select(fromPostReducer.postFeatureKey);
  }

  ngOnInit() {}

  addPost() {
    const post = {
      title: 'Teste',
      content: 'teste',
      author: 'teste',
    };
    this.store.dispatch(addPost({ post }));
  }
}
