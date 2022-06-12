import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
// Renderer2 is used to manipulate only particular section of DOM but ElementRef manipulates whole application DOM to make any small changes
  constructor(private element: ElementRef, private renderor: Renderer2) {

  }
  @HostBinding('style.backgroundColor') backgroundColor : string = 'transparent';
  @Input() defaultColor : string;
  @Input() highlightColor : string;
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderor.setStyle(this.element.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderor.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }
  ngOnInit() {
    this.renderor.setStyle(this.element.nativeElement, 'background', 'yellow');    
  }
}
