// import { Injectable } from '@angular/core';
// import {
//   Router,
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
// } from '@angular/router';

// import { AuthService } from '../service/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     if (this.authService.currentUserValue) {
//       const userRole = this.authService.currentUserValue.role;
//       if (route.data.role && route.data.role.indexOf(userRole) === -1) {
//         this.router.navigate(['/authentication/signin']);
//         return false;
//       }
//       return true;
//     }

//     this.router.navigate(['/authentication/signin']);
//     return false;
//   }
// }

import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userRole = this.authService.currentUserValue.role;

    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(["authentication/signin"]);
      return false;
    } else if(route.data.role && route.data.role.indexOf(userRole) === -1) {
      this.router.navigate(['/authentication/signin']);
      return false;
    }
    return true;
  }
}
