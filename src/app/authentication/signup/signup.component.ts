import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AuthService } from "../../core/service/auth.service";
import { ReactiveFormsModule } from "@Angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  authForm = new FormGroup({
    fullname: new FormControl("fullname"),
    username: new FormControl("username"),
    email: new FormControl("email"),
    password: new FormControl("password"),
  });
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    private firestore: AngularFirestore
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      fullname: ["", Validators.required],
      username: ["", Validators.required],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", Validators.required],
      // cpassword: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.firestore
      .collection("userManagement", (ref) =>
        ref.where("email", "==", this.authForm.value.email)
      )
      .get()
      .subscribe((ss) => {
        if (ss.docs.length === 0) {
          this.firestore
            .collection("userManagement")
            .add({
              fullname: this.authForm.value.fullname,
              username: this.authForm.value.username,
              email: this.authForm.value.email,
              password: this.authForm.value.password,
              uniqueID: Math.random(),
              status: "Disabled",
              role: "User",
              date: formatDate(new Date(), "yyyy-MM-dd", "en"),
            })
            .then((res) => {
              console.log(res);
              // this.authForm.reset();
              this.router.navigate(["/authentication/signin"]);
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          alert("Email exist already");
        }
      });
    // console.log("dd");
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.authForm.invalid) {
    //   return;
    // } else {
    //   this.router.navigate(['/admin/dashboard/main']);
    // }
  }
}
