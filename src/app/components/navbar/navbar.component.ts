import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showNav: boolean = true;
  userType: string = ''; 

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNav = !['/login', '/register'].includes(event.url);
      }
    });

  }


  logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
