import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtillsService } from 'src/app/services/utills.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
  isSubmitDisabled: boolean = false;
  loginForm: FormGroup;

  constructor(private http: HttpClient, private router: Router, private utillService:UtillsService,private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls
  }
  checkLoginUser() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return
    this.isSubmitDisabled = true;
    //make api call to authenticate user
    const payload = this.loginForm.value;
    this.http.post("https://dummyjson.com/auth/login",payload).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem("JWTtoken", res.token);
      this.toastr.success("login successfully", "Success");
      this.utillService.isUserLoggedIn.next(true);
      this.router.navigate(['/home']);
   }), (err: any) => {
      console.log(err.error);
      this.toastr.error(err.error.message, "Error")


    }
  }

}
