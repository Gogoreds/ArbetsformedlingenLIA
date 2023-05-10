import { Component } from '@angular/core';

@Component({
  selector: 'app-geninfo',
  template: `
    <body
      class="w-7/12 h-32 rounded-sm bg-white border-t-[16px] border-[#95C23E] rounded-b-lg shadow-md"
    >
      <div class="pt-4 pl-8">
        <h3 class="text-slate-800 font-semibold text-xl">
          General Information
        </h3>
        <p class="text-slate-700 font-normal pt-4">
          Just your average genious front-end developer, nothing more, nothing
          less...
        </p>
      </div>
    </body>
  `,
  styles: [
    `
      :host {
        display: block;
        padding-left: 8.33vw;
      }
    `,
  ],
})
export class GeninfoComponent {}
