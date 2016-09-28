import { Component } from "@angular/core";

@Component({
  selector: 'rio-root',
  template: `
    <h1>My First NG2 App</h1>
    <p>This is the root component of the app</p>
  `,
  styles: [`
    p {
      color: blue;
    }
  `]
})
export class RootComponent {}