import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NewsComponent } from '../components/news/news.component';

@NgModule({
  declarations: [HeaderComponent, NewsComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NewsComponent, FooterComponent],
})
export class SharedModule {}
