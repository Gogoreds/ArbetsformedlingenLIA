import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: ` <body
    class="w-7/12 h-[240px] rounded-sm bg-white border-t-[16px] border-[#95C23E] rounded-b-lg shadow-md"
  ></body>`,
  styles: [
    `
      :host {
        display: block;
        padding-left: 8.33vw;
      }
    `,
  ],
})
export class SkillsComponent {}
