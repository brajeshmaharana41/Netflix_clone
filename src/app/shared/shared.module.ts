import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MaterialModule } from './material/material.module';
import {
  NgbAlertModule,
  NgbModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeHeaderComponent } from './component/home-header/home-header.component';
import { HomeFooterComponent } from './component/home-footer/home-footer.component';
import { JwplayerComponent } from './component/jwplayer/jwplayer.component';
import { AccountsHeaderComponent } from './component/accounts-header/accounts-header.component';
import { AccountsFooterComponent } from './component/accounts-footer/accounts-footer.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, JwplayerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [FooterComponent, HeaderComponent, JwplayerComponent],
})
export class SharedModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
