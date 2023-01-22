import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'post',
    component:FirstComponent
  },
  {
    path:'reactive',
    component:ReactiveComponent
  },
  {
    path:'template',
    component:TemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
