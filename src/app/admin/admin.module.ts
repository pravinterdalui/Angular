import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FirstComponent } from './first/first.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    FirstComponent,
    ReactiveComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
