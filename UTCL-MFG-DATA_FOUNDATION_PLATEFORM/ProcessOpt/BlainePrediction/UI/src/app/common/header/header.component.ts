import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoPath!: string;
 userName: string = '';
  constructor(private authService: MsalService){}

  ngOnInit(){
    this.logoPath='assets/logo.png';
    const loginData = localStorage.getItem('login');
  if (loginData) {
    const user = JSON.parse(loginData);
    this.userName = user.username;   // take username from login object
  }

  }

  logout(){
    // console.log("logout");
    
    this.authService.logoutPopup({
      mainWindowRedirectUri: "/login"
  });
  localStorage.clear()
  sessionStorage.clear()
  }
}
