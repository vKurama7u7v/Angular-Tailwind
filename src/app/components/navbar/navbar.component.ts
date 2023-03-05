import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  dropdown: boolean = false;
  navbar: boolean = false;
  language: boolean = false;

  onSetShowDropdown = () => {
    this.dropdown = !this.dropdown;
  }

  onSetShowNavbar = () => {
    this.navbar = !this.navbar;
  }

  onSetShowLanguage = () => {
    this.language = !this.language;
  }
}
