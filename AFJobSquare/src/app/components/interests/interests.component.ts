import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  template: ` <body
    class="w-7/12 h-[240px] rounded-sm bg-white border-t-[16px] border-[#95C23E] rounded-b-lg shadow-md"
  >
    <h1 class="text-slate-800  font-semibold text-xl pt-4 pl-8">Interests</h1>
    <p class="text-emerald-600 pt-2 pl-8">Companies</p>
    <hr class="h-px mt-4 px-4 bg-gray-200 border-0 dark:bg-gray-700" />
    <div class="flex pt-8 pl-8">
      <svg class="h-12 w-12 mr-2" viewBox="0 0 238.962 238.93">
        <path d="M0 0h238.962v238.93H0z" fill="#22559e" />
        <g fill="#fff">
          <path
            d="M59.771 160.013h119.552v19.398H59.771zM119.048 59.968h20.2l9.883 65.683 10.104-65.683h19.979v89.744H165.9V82.126l-11.22 67.586h-11.504L132.35 82.126v67.454h-13.302zM91.364 88.464h13.651v-6.339c0-6.207 0-24.018-22.836-24.018-22.331 0-22.331 20.34-22.331 24.018v46.645c0 13.618 4.98 22.54 17.887 22.627 7.63.012 12.95-4.762 14.078-6.579v4.762l13.202.131v-48.626H83.537v10.794h7.827v14.21c0 7.203-2.255 12.106-8.966 12.106-6.722 0-8.856-5.221-8.856-12.107V82.125c0-3.569 0-11.713 8.856-11.713 8.966 0 8.966 8.276 8.966 11.713z"
          />
        </g>
      </svg>
      <div class="pl-4">
        <h1 class="font-bold text-base">Gaming</h1>
        <h5 class="text-sm text-slate-500">10,528 followers</h5>
      </div>
      <div class="flex pl-52">
        <svg class="h-12 w-12 mr-2" viewBox="0 0 238.962 238.93">
          <path d="M0 0h238.962v238.93H0z" fill="#22559e" />
          <g fill="#fff">
            <path
              d="M59.771 160.013h119.552v19.398H59.771zM119.048 59.968h20.2l9.883 65.683 10.104-65.683h19.979v89.744H165.9V82.126l-11.22 67.586h-11.504L132.35 82.126v67.454h-13.302zM91.364 88.464h13.651v-6.339c0-6.207 0-24.018-22.836-24.018-22.331 0-22.331 20.34-22.331 24.018v46.645c0 13.618 4.98 22.54 17.887 22.627 7.63.012 12.95-4.762 14.078-6.579v4.762l13.202.131v-48.626H83.537v10.794h7.827v14.21c0 7.203-2.255 12.106-8.966 12.106-6.722 0-8.856-5.221-8.856-12.107V82.125c0-3.569 0-11.713 8.856-11.713 8.966 0 8.966 8.276 8.966 11.713z"
            />
          </g>
        </svg>
        <div class="pl-4">
          <h1 class="font-bold text-base">Pretentious Art</h1>
          <h5 class="text-sm text-slate-500">12,856,478 followers</h5>
        </div>
      </div>
    </div>
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
export class InterestsComponent {}
