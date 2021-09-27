import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuToggle = false;
  constructor() { }

  logOut() {
    localStorage.clear();
    // this.router.navigateByUrl('/login');
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
