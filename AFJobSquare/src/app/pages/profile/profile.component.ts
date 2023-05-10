import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-profile',
  template: `
    <app-header></app-header>
    <div class="relative space-y-4 py-4 items-center bg-[#F3F2EF]">
      <app-hero></app-hero>
      <app-geninfo></app-geninfo>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-interests></app-interests>
    </div>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .active {
        border: 1px solid #00005a;
        color: #ffff;
      }
    `,
  ],
})
export class ProfileComponent {}
