import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <nav class="bg-[#00005A]">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0">
            <img
              class="block h-8 w-auto lg:hidden"
              src="../../../assets/logotype-green.png"
              alt="Arbetsförmedlingen"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="../../../assets/logotype-green.png"
              alt="Arbetsförmedlingen"
            />
          </div>
          <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full rounded-md border-0 bg-gray-200 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-500 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex space-x-8 nav-item pl-64">
            <a href="/" class="flex flex-col items-center text-white">
              <svg
                class="h-6 w-6 mb-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h2c.553,0,1-.448,1-1V14c0-.551,.448-1,1-1h6c.552,0,1,.449,1,1v9c0,.552,.447,1,1,1h2c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Z"
                />
              </svg>
              <span>Home</span>
            </a>

            <a href="/" class="flex flex-col items-center text-white">
              <svg
                class="h-6 w-6 mb-1"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm7.5 7a5.006 5.006 0 0 0 -5-5h-5a5.006 5.006 0 0 0 -5 5v4h15zm2.5-11a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm1.5 2h-5a4.793 4.793 0 0 0 -.524.053 6.514 6.514 0 0 1 -1.576 2.216 7.008 7.008 0 0 1 5.1 6.731h7v-4a5.006 5.006 0 0 0 -5-5z"
                />
              </svg>
              <span>Network</span>
            </a>
            <a href="/" class="flex flex-col items-center text-white">
              <svg
                class="h-6 w-6 mb-1"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="13 14 13 16 11 16 11 14 0 14 0 24 24 24 24 14 13 14"
                />
                <path
                  d="M24,12V7a3,3,0,0,0-3-3H18V2a2,2,0,0,0-2-2H8A2,2,0,0,0,6,2V4H3A3,3,0,0,0,0,7v5ZM8,2h8V4H8Z"
                />
              </svg>
              <span>Jobs</span>
            </a>
            <a href="/" class="flex flex-col items-center text-white">
              <svg
                class="h-6 w-6 mb-1"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0ZM7,5h5a1,1,0,0,1,0,2H7A1,1,0,0,1,7,5ZM17,15H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Zm0-4H7A1,1,0,0,1,7,9H17a1,1,0,0,1,0,2Z"
                />
              </svg>
              <span>Messages</span>
            </a>

            <!-- Notifications -->
            <a href="/" class="flex flex-col items-center text-white">
              <svg
                class="h-6 w-6 mb-1"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.36,21c-.45,1.72-2,3-3.86,3s-3.41-1.28-3.86-3h7.72Zm5.05-2.99l.05-.06c.5-.66,.67-1.5,.46-2.25l-1.65-7.83c-.97-3.46-4.16-5.88-7.77-5.88-3.81,0-7.04,2.58-7.87,6.3l-1.56,7.49c-.17,.79,.02,1.6,.52,2.23,.51,.63,1.26,.99,2.07,.99h13.67c.81,0,1.56-.36,2.07-.99ZM3.12,15.35l1.55-7.47c.84-3.75,3.62-6.57,7.15-7.53-.74-.22-1.52-.36-2.32-.36C5.69,0,2.45,2.58,1.62,6.3L.06,13.78c-.17,.79,.02,1.6,.52,2.23,.51,.63,1.26,.99,2.07,.99h.4c-.08-.54-.06-1.1,.06-1.65Z"
                />
              </svg>
              <span>Notifications</span>
            </a>
            <a href="/" class="flex flex-col items-center text-white">
              <button
                type="button"
                class="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  class="h-8 w-8 rounded-full border border-1"
                  src="https://i.ibb.co/3BfbLXV/Ellipse.png"
                  alt=""
                />
              </button>
              <span>Me</span>
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="lg:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          >Dashboard</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Team</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Projects</a
        >
        <a
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Calendar</a
        >
      </div>
      <div class="border-t border-gray-700 pb-3 pt-4">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-gray-400">tom@example.com</div>
          </div>
        </div>
        <!-- <div class="mt-3 space-y-1 px-2">
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Your Profile</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Settings</a
          >
          <a
            href="#"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >Sign out</a
          >
        </div> -->
      </div>
    </div>
  </nav>`,
  styles: [
    `
      .active {
        border: 1px solid #00005a;
        color: #ffff;
      }
      .common-svg {
        height: 6;
        width: 6;
        fill: white;
      }
      .nav-item {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class HeaderComponent {}
