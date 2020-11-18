import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ChallanModule } from '../challan/challan.module';
import { DCardComponent } from './d-card/d-card.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, DCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ChallanModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    DCardComponent

  ]
})
export class DashboardModule { }
