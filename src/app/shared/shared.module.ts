import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FooterComponent, HeaderComponent],
})
export class SharedModule {}
