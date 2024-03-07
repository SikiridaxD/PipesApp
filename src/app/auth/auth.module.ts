import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './Pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { LogintPageComponent } from './Pages/logint-page/logint-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LogintPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
