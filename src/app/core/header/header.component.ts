import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../app/app.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('toolbar', { static: false }) toolbar!: ElementRef<HTMLElement>;
  showMenu: boolean = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.checkMenuFit();
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  checkMenuFit() {
    if (this.toolbar && this.toolbar.nativeElement) {
      const toolbarWidth = this.toolbar.nativeElement.offsetWidth;
      const menuItems = document.getElementById('menuItems');
      if (menuItems) {
        const menuItemsWidth = menuItems.offsetWidth;
        return menuItemsWidth > toolbarWidth;
      }
    }
    return false;
  }
}
