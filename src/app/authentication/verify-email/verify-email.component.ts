import { AuthService } from 'src/app/core/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.sass']
})
export class VerifyEmailComponent implements OnInit {
  userEmail: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if(this.authService.currentUserValue) {
      this.userEmail = this.authService.currentUserValue["email"];
    }
  }

}
