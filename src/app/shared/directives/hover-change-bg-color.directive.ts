import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHoverChangeBgColor]'
})
export class HoverChangeBgColorDirective {
    @Input('appHoverChangeBgColor') bgColor: string;

    // 订阅 属性型指令appHoverGrayBg 所在的宿主 DOM 元素的事件
    @HostListener('mouseenter') onMouseEnter() {
        this.hoverChangeBg(this.bgColor|| '#999999');
    };

    @HostListener('mouseleave') onMouseLeave() {
        this.hoverChangeBg();
    };

    constructor(private hostEle: ElementRef) {}

    hoverChangeBg(color: string = null) {
        this.hostEle.nativeElement.style.backgroundColor = color;
    }

}
