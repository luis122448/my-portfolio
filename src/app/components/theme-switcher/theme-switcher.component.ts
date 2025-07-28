import { Component, Renderer2, inject, OnChanges, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DefaultValuesService } from '../../service/default-values.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnChanges{

  isDark = true;
  isOpenSidebar = false;
  renderer = inject(Renderer2);
  document = inject(DOCUMENT);

  constructor(
    private defaultValuesService: DefaultValuesService
  ){
    this.renderer.addClass(this.document.body.parentElement, 'dark');
    this.isDark = this.defaultValuesService.getCookieBoolean('dark');
    this.onChange(false)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['openSidebar']){
      this.isOpenSidebar = changes['openSidebar'].currentValue;
    }
  }

  onChange(change: boolean){
    if(change){
      this.isDark = !this.isDark;
      this.defaultValuesService.setCookie('dark',this.isDark.toString())
    }

    if (this.isDark) {
      this.renderer.addClass(this.document.body.parentElement, 'dark');
    } else {
      this.renderer.removeClass(this.document.body.parentElement, 'dark');
    }
  }
}
