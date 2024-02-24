import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
  RendererStyleFlags2,
} from "@angular/core";

import type { MdIcon } from "@material/web/icon/icon";

type MdIconFontType = "rounded" | "sharp" | "outlined";

const mdIconFontMap: Record<MdIconFontType, string> = {
  rounded: "Material Symbols Rounded",
  sharp: "Material Symbols Sharp",
  outlined: "Material Symbols Outlined",
} as const;

@Directive({
  standalone: true,
  selector: "md-icon[icon-font]",
  inputs: [{ name: "font", alias: "icon-font" }],
})
export class MdIconFontDirective {
  private el: MdIcon = inject(ElementRef).nativeElement;
  private renderer = inject(Renderer2);

  set font(v: MdIconFontType) {
    console.log("Setting font from MdIconFontDirective", v);
    this.renderer.setStyle(
      this.el,
      "--md-icon-font",
      mdIconFontMap[v],
      RendererStyleFlags2.DashCase
    );
  }
}

@Directive({
  standalone: true,
  selector: "md-icon[icon-font-two]",
})
export class MdIconFontUsingSignalsDirective {
  private el: MdIcon = inject(ElementRef).nativeElement;
  private renderer = inject(Renderer2);

  font = input<MdIconFontType>("outlined", { alias: "icon-font-two" });

  constructor() {
    console.log("From Constructor MdIconFontUsingSignalsDirective");

    effect(() => {
      const v = this.font();

      console.log("Setting font from MdIconFontUsingSignalsDirective", v);

      this.renderer.setStyle(
        this.el,
        "--md-icon-font",
        mdIconFontMap[v],
        RendererStyleFlags2.DashCase
      );
    });
  }
}
