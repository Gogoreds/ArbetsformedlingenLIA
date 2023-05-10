import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: ` <body class="w-7/12 border border-1 rounded-sm bg-white">
    <!-- Banner image -->
    <div
      class="bg-top bg-no-repeat bg-cover h-56"
      style="
          background-image: url('https://i.ibb.co/NnF0nkS/Mean.jpg');
        "
    ></div>
    <section class="relative p-0 sm:p-6">
      <!-- Profile information -->
      <div class="absolute bottom-0 w-full p-4">
        <!-- Name and Title -->
        <div class="flex flex-col">
          <h2 class="text-white font-bold text-2xl">Captain Angular</h2>
          <h4 class="text-white font-semibold text-lg">Software Engineer</h4>
        </div>
        <!-- Buttons -->
        <div class="flex mt-4 space-x-2">
          <button class="bg-blue-600 text-white px-4 py-2 rounded">
            Connect
          </button>
          <button class="bg-white text-blue-600 px-4 py-2 rounded">
            Message
          </button>
          <button class="bg-white text-blue-600 px-4 py-2 rounded">More</button>
        </div>
      </div>
      <!-- Avatar -->
      <div class="absolute left-4 bottom-20">
        <img
          class="w-24 h-24 rounded-full border-4 border-white"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjE2NDB8MHwxfGFsbHwzfHx8fHx8fHx8fHwxNjM5MDM3ODM5&ixlib=rb-1.2.1&q=80&w=400"
          alt="Profile picture"
        />
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
