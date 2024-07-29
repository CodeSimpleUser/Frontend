import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css'
})
export class SignOutComponent implements OnInit{

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.signOut();
  }
  signOut() {
    this.authService.signOut().subscribe();
  }
}
