import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
    ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(username, password)
    .then(async (result) => {
      await localStorage.setItem('currentUser', JSON.stringify(result.user));
      this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('currentUser'))
      );
      this.currentUser = this.currentUserSubject.asObservable();
      // this.currentUserSubject.next(result.user);
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      // return result.user;
      // this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
    // return this.http
    //   .post<any>(`${environment.apiUrl}/authenticate`, {
    //     username,
    //     password,
    //   })
    //   .pipe(
    //     map((user) => {
    //       console.log("===user+++", user);
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes

    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //       this.currentUserSubject.next(user);
    //       return user;
    //     })
    //   );
  }

  userProfile() {
    this.ngZone.run(() => {
      this.router.navigate(['user-profile']);
    });
  }

  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        localStorage.setItem('currentUser', JSON.stringify(result.user));
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['authentication/verify-email-address']);
    })
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  logout() {
    // remove user from local storage to log user out
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('currentUser');
      this.router.navigate(['authentication/signin']);
    })
  }
}
