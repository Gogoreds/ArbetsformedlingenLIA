import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div class="flex flex-col h-screen justify-center items-center">
      <div class="w-24 mb-4">
        <img src="company-logo.png" alt="Company Logo" />
      </div>
      <form class="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl mb-4">Sign {{ isSeeker ? 'In' : 'Up' }}</h2>
        <div class="flex mb-4">
          <button
            class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full {{
              isSeeker ? 'active' : ''
            }}"
            (click)="toggleForm()"
          >
            Job Seeker
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full {{
              !isSeeker ? 'active' : ''
            }}"
            (click)="toggleForm()"
          >
            Job Holder
          </button>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
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
        <div *ngIf="isSeeker" class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div *ngIf="isSeeker" class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="resume"
          >
            Resume
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resume"
            type="text"
            placeholder="Resume"
          />
        </div>
        <div *ngIf="!isSeeker" class="mb-4">
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
        <div *ngIf="!isSeeker" class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="company-description"
          >
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company-description"
            type="text"
            placeholder="Company Description"
          />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          type="submit"
        >
          {{ isSeeker ? 'Sign In' : 'Sign Up' }}
        </button>
      </form>
    </div>
  `,
  styles: [
    `
      .active {
        border: 1px solid #3182ce;
        color: #3182ce;
      }
    `,
  ],
})
export class AuthComponent {
  isSeeker: boolean = true;

  toggleForm(): void {
    this.isSeeker = !this.isSeeker;
  }
}
