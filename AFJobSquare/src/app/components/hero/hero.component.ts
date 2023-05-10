import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: ` <body
    class="w-7/12 h-[480px] border border-1 rounded-sm bg-white"
  >
    <!-- Banner image -->
    <div
      class="bg-top bg-no-repeat bg-cover h-56"
      style="
          background-image: url('https://i.ibb.co/NnF0nkS/Mean.jpg');
        "
    ></div>
    <section class="relative p-0 sm:p-6">
      <!-- Avatar -->
      <div class="absolute left-8 bottom-0">
        <img
          class="w-48 h-48 rounded-full border-0 border-white border-shadow shadow-md"
          src="https://i.ibb.co/3BfbLXV/Ellipse.png"
          alt="Profile picture"
        />
      </div>
      <!-- Profile information -->
      <div class="absolute top-16 w-full pl-4">
        <!-- Name and Title -->
        <div class="flex flex-col">
          <h2 class="text-black font-bold text-2xl">Captain Angular</h2>
          <h4 class="text-black font-semibold text-lg">Front-end Utvecklare</h4>
          <p class="text-slate-700 font-thin">
            Here I am. What are your other two wishes?
          </p>
        </div>
        <!-- Buttons -->
        <div class="flex pt-8 space-x-2">
          <button
            class="bg-[#00005a] hover:bg-cyan-500 text-white px-4 py-2 rounded"
          >
            Open to Connections
          </button>
          <button
            class="bg-white border-2 border-[#00005a] text-[#00005a] px-4 py-2 rounded"
          >
            Send a Message
          </button>
          <button
            class="bg-white border-2 border-[#00005a] text-[#00005a] px-4 py-2 rounded"
          >
            More
          </button>
        </div>
      </div>
    </section>
  </body>`,
  styles: [
    `
      :host {
        display: block;
        padding-left: 8.33vw;
      }
    `,
  ],
})
export class HeroComponent {}
