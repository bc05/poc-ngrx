import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutModule } from './layouts/admin/admin-layout/admin-layout.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
