import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `<body
    class="w-7/12 h-[430px] rounded-sm bg-white border-t-[16px] border-[#95C23E] rounded-b-lg shadow-md"
  >
    <div class="pt-4 pl-8">
      <h1 class="text-slate-800 font-semibold text-xl">Work Experience</h1>
      <div class="flex pt-8">
        <svg class="h-12 w-12 mr-2" viewBox="0 0 238.962 238.93">
          <path d="M0 0h238.962v238.93H0z" fill="#22559e" />
          <g fill="#fff">
            <path
              d="M59.771 160.013h119.552v19.398H59.771zM119.048 59.968h20.2l9.883 65.683 10.104-65.683h19.979v89.744H165.9V82.126l-11.22 67.586h-11.504L132.35 82.126v67.454h-13.302zM91.364 88.464h13.651v-6.339c0-6.207 0-24.018-22.836-24.018-22.331 0-22.331 20.34-22.331 24.018v46.645c0 13.618 4.98 22.54 17.887 22.627 7.63.012 12.95-4.762 14.078-6.579v4.762l13.202.131v-48.626H83.537v10.794h7.827v14.21c0 7.203-2.255 12.106-8.966 12.106-6.722 0-8.856-5.221-8.856-12.107V82.125c0-3.569 0-11.713 8.856-11.713 8.966 0 8.966 8.276 8.966 11.713z"
            />
          </g>
        </svg>
        <div class="pl-4">
          <h1 class="font-bold text-base">General Motors</h1>
          <h4>Freelance Developer</h4>
          <h5 class="text-sm text-slate-500">DEC 2019 - Present</h5>
          <p class="text-slate-700 font-normal pt-2 text-sm">
            - Developed a responsive website using Angular and TailwindCSS.
          </p>
          <p class="text-slate-700 font-normal text-sm">
            - Worked in an agile environment alongside a team of seasoned
            developers.
          </p>
          <p class="text-slate-700 font-normal text-sm">
            - Designed a visually appealing website using Figma and Adobe XD!
          </p>
        </div>
      </div>
      <div class="flex pt-8">
        <svg
          class="h-12 w-12 mr-2"
          viewBox="0 0 256 256"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
              <stop stop-color="#58B0E3" offset="0%" />
              <stop stop-color="#F44E28" offset="100%" />
            </linearGradient>
          </defs>
          <circle fill="#FFF" cx="128" cy="128" r="128" />
          <path
            d="M186.831 49.21h-7.774l-50.825 73.452h-.464L77.059 49.21h-7.89l54.77 79.022L69.4 206.79h7.774l50.477-73.22h.464l50.476 73.22h7.891l-54.538-78.558 54.886-79.022z"
            fill="url(#a)"
          />
        </svg>
        <div class="pl-4">
          <h3 class="font-bold text-base">Xavier Institute</h3>
          <h4>Front-end Developer</h4>
          <h5 class="text-sm text-slate-500">JUN 2010 - SEP 2018</h5>
          <p class="text-slate-700 font-normal pt-2 text-sm">
            - Developed a responsive websites using Angular and TailwindCSS.
          </p>
          <p class="text-slate-700 font-normal text-sm">
            - Helped students learn more about their superpowers!
          </p>
          <p class="text-slate-700 font-normal text-sm">
            - Designed beautiful and sustainable uniforms for the gifted
            students!
          </p>
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
export class ExperienceComponent {}
