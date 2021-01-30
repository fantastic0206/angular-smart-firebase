import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
// import { AuthService } from 'src/app/core/service/auth.service';
import { AuthService } from "../../core/service/auth.service";
import { Role } from "src/app/core/models/role";

import { ReactiveFormsModule } from "@Angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    email: new FormControl("email"),
    password: new FormControl("password"),
  });
  submitted = false;
  error = "";
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authService: AuthService
    public authService: AuthService,
    private firestore: AngularFirestore
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  // adminSet() {
  //   this.authForm.get('username').setValue('admin@school.org');
  //   this.authForm.get('password').setValue('admin@123');
  // }
  // teacherSet() {
  //   this.authForm.get('username').setValue('teacher@school.org');
  //   this.authForm.get('password').setValue('teacher@123');
  // }
  // studentSet() {
  //   this.authForm.get('username').setValue('student@school.org');
  //   this.authForm.get('password').setValue('student@123');
  // }
  onSubmit() {
    this.firestore
      .collection("userManagement", (ref) =>
        ref
          .where("email", "==", this.authForm.value.email)
          .where("password", "==", this.authForm.value.password)
      )
      .get()
      .subscribe((ss) => {
        if (ss.docs.length === 0) {
            this.error = 'Email and Password Invalid !';
        } else {
          ss.docs.forEach((doc) => {
            var userData = doc.data();
            this.authService.login(userData);
          });
        }
      });
    // this.submitted = true;
    // this.error = '';
    // if (this.authForm.invalid) {
    //   this.error = 'Username and Password not valid !';
    //   return;
    // } else {
    //   // this.authService
    //   //   .login(this.f.username.value, this.f.password.value)
    //   //   .subscribe(
    //   //     (res) => {
    //   //       if (res) {
    //   //         const role = this.authService.currentUserValue.role;
    //   //         if (role === Role.All || role === Role.Admin) {
    //   //           this.router.navigate(['/admin/dashboard/main']);
    //   //         } else if (role === Role.Teacher) {
    //   //           this.router.navigate(['/teacher/dashboard']);
    //   //         } else if (role === Role.Student) {
    //   //           this.router.navigate(['/student/dashboard']);
    //   //         } else {
    //   //           this.router.navigate(['/authentication/signin']);
    //   //         }
    //   //       } else {
    //   //         this.error = 'Invalid Login';
    //   //       }
    //   //     },
    //   //     (error) => {
    //   //       this.error = error;
    //   //       this.submitted = false;
    //   //     }
    //   //   );
    // }
  }
}
