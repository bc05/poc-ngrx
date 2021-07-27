import { createAction, props } from '@ngrx/store';
import { PostState } from './post.reducer';

export enum PostActionsTypes {
  addPost = '[Post] Add post',
  removePost = '[post] Remove post data',
}

export const addPost = createAction(
  PostActionsTypes.addPost,
  props<{ post: PostState }>()
);
export const loadPost = createAction('[Post] Load Post');
