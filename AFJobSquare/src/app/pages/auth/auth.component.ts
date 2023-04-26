import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div
      class="flex flex-col h-screen justify-center items-center bg-[#eceae6]"
    >
      <div class="w-80 mb-4">
        <img src="/assets/af_logo.png" alt="Arbetsförmedlingen Logo" />
      </div>
      <form class="w-1/3 bg-white shadow-md rounded px-0 pt-6 pb-8 mb-4">
        <div class="flex -mt-6 mb-8 px-0">
          <button
            type="button"
            class="bg-[#00005A] text-white font-bold w-1/2 {{
              isSeeker ? 'active' : ''
            }} -rounded-t-md"
            (click)="toggleForm()"
          >
            Arbetssökande
          </button>
          <button
            type="button"
            class="bg-[#95c23e]  text-white font-bold w-1/2 {{
              !isSeeker ? 'active' : ''
            }} -rounded-t-md"
            (click)="toggleForm()"
          >
            Arbetsgivare
          </button>
        </div>
        <ng-container *ngIf="!register">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </ng-container>

        <ng-container *ngIf="register && isSeeker">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Full Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="resume"
            >
              LinkedIn Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              type="text"
              placeholder="Resume"
            />
          </div>
        </ng-container>

        <ng-container *ngIf="register && !isSeeker">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="company-name"
            >
              Company Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company-name"
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="company-description"
            >
              Company Description
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company-description"
              type="text"
              placeholder="Company Description"
            />
          </div>
        </ng-container>

        <button
          class="bg-[#00005A] hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          {{ register ? (isSeeker ? 'Register' : 'Register') : 'Log In' }}
        </button>
        <div class="mt-4">
          <div class="relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200"></div>
            </div>
            <div
              class="relative flex justify-center text-sm font-medium leading-6"
            >
              <span class="bg-white px-6 text-gray-900">Or</span>
            </div>
          </div>

          <div class="py-4 items-center">
            <button
              class="px-4 py-2 w-full border flex gap-20 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            >
              <img
                class="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span class="">Login with Google</span>
            </button>
          </div>
          <p class="text-center text-sm text-gray-500">
            {{
              register
                ? 'Already have an Arbetsförmedlingen account?'
                : 'No Arbetsförmedlingen account yet?'
            }}
            <a
              href="#"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              (click)="toggleRegister()"
              >{{ register ? 'Log in here.' : 'Register here.' }}</a
            >
          </p>
        </div>
      </form>
    </div>
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
export class AuthComponent {
  isSeeker: boolean = true;
  register: boolean = false;

  toggleForm(): void {
    this.isSeeker = !this.isSeeker;
  }

  toggleRegister(): void {
    this.register = !this.register;
  }
}
