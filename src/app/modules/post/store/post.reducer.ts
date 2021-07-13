import { Action, createReducer, on } from '@ngrx/store';
import { addPost } from './post.actions';
import * as PostActions from './post.actions';

export const postFeatureKey = 'post';

export interface PostState {
  title: string;
  content: string;
  author: string;
}

export interface AppState {
  [postFeatureKey]: PostState[];
}

export const initialState: PostState[] = [];

const postReducer = createReducer(
  initialState,
  on(PostActions.addPost, (state, { post }) => [...state, post])
);

export function reducer(state: PostState[], action: Action) {
  return postReducer(state, action);
}
