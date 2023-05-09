import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeroComponent } from '../components/hero/hero.component';
import { NewsComponent } from '../components/news/news.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NewsComponent,
    HeroComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, NewsComponent, HeroComponent, FooterComponent],
})
export class SharedModule {}
