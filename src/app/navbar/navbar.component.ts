import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    this.navbareffc();
  }
  navbareffc() {
    const btnhide = document.querySelector('#btnhide');
    const btnhide2 = document.querySelector('#btnhide2');
    const navbar = document.querySelector('#navbar');

    btnhide?.addEventListener('click', function () {
      navbar?.classList.remove('hidden');
      btnhide.classList.add('hidden');
      btnhide2?.classList.remove('hidden');
    });
    btnhide2?.addEventListener('click', function () {
      navbar?.classList.add('hidden');
      btnhide?.classList.remove('hidden');
      btnhide2?.classList.add('hidden');
    });
  }
}
