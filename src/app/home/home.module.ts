import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from '../shared/component/home-header/home-header.component';
import { HomeFooterComponent } from '../shared/component/home-footer/home-footer.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class HomeModule { }
