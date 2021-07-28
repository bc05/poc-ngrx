import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpConfigInterceptor } from './core/interceptors/http-config.interceptor';
import { metaReducers, reducers } from './core/store/reducers';
import { AdminLayoutModule } from './layouts/admin/admin-layout/admin-layout.module';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AdminLayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    BrowserAnimationsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
