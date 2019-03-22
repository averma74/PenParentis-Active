import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth-service/auth.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;

  constructor(
    fb: FormBuilder,
    private auth: AuthService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.loginForm = fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  async login(){

      let data = this.loginForm.value;

      if (!data.email) {
        return;
      }

      let credentials = {
        email: data.email,
        password: data.password
      };

      this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.push('HomePage'),
				error => this.loginError = error.message
			);
  }

  register(){
    this.navCtrl.push('RegisterPage');
  }

}
