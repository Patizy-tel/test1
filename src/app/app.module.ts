import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './tools/helpers/auth.guard';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { environment } from 'src/environments/environment';
import { JwtInterceptor } from './tools/helpers/jwt.interceptor';
import { AlertService } from './tools/services';
import { ViewModule } from './views/view.module';
import { RouterModule } from '@angular/router';
import { FullComponent } from './views/layouts/full.component';
import { BreadcrumbComponent } from './views/middleware/breadcrumb/breadcrumb.component';
import { NavigationComponent } from './views/middleware/header-navigation/navigation.component';
import { SidebarComponent } from './views/middleware/sidebar/sidebar.component';
import { SpinnerComponent } from './views/middleware/spinner.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};   


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    ViewModule,
    NgbModule,
    OAuthModule.forRoot({
      resourceServer:{
        allowedUrls:[`${environment.apiUrl}`],
        sendAccessToken:true
      }
    }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [
    AuthGuard,
    AlertService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
	{
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: 'baseUrl', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
