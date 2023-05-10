import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-profile',
  template: ` <app-header></app-header>
    <div class="relative py-4 items-center bg-[#F3F2EF]">
      <app-hero class=""></app-hero>
    </div>
    <div class="bg-[#eceae6]">
      <app-footer></app-footer>
    </div>`,
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
