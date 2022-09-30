import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'loginPage',
        children: [
          {
            path: '',
            loadChildren: () => import('../loginPage/loginPage.module').then( m => m.LoginPageModule)
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: () => import('../register/registerPage.module').then( m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/loginPage',
        pathMatch: 'full'
      },
      {
        path: 'postspage',
        children: [
          {
            path: '',
            loadChildren: () => import('../posts-page/posts-page.module').then( m => m.PostsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/loginPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
