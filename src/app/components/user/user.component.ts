import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserClaim } from '../../models/userclaim';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private authService:AuthService) { this.getUser}

  userClaims: UserClaim[] = [];

  getUser() {
      this.authService.user().subscribe(
          result => {
              this.userClaims = result;
          });
  }
}
