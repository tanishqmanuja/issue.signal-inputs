import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MdIconComponent, MdIconFontDirective } from "mwc";
import { MdIconFontUsingSignalsDirective } from "../../projects/mwc/src/public-api";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MdIconComponent,
    MdIconFontDirective,
    MdIconFontUsingSignalsDirective,
  ],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    <span>This is Rounded</span>
    <md-icon icon-font="rounded">star</md-icon>

    <span>This doesnt work!</span>
    <md-icon icon-font-two="rounded">star</md-icon>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "issue.signal-inputs";
}
