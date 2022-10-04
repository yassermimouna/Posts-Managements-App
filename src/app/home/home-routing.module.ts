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
      },
      {
        path: 'addpost',
        children: [
          {
            path: '',
            loadChildren: () => import('../addpost/addpost.module').then( m => m.AddpostPageModule)
          }
        ]
      },
      {
        path: 'addfriend',
        children: [
          {
            path: '',
            loadChildren: () => import('../addfriend/addfriend.module').then( m => m.AddfriendPageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
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
