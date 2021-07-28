import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../contracts/posts.interface';

@Injectable({ providedIn: 'root' })
export class PostService {
  private resource = 'posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.resource);
  }
}
