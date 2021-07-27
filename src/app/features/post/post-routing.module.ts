import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { ListPostComponent } from './pages/list-post/list-post.component';

const routes: Routes = [
  {
    path: '',
    component: ListPostComponent,
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
  {
    path: 'edit/:id',
    component: EditPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
