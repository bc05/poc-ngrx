import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { ListPostComponent } from './pages/list-post/list-post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './services/post.service';
import * as fromPostReducer from './store/post.reducer';

@NgModule({
  declarations: [CreatePostComponent, EditPostComponent, ListPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    StoreModule.forFeature(
      fromPostReducer.postFeatureKey,
      fromPostReducer.reducer
    ),
  ],
})
export class PostModule {}
