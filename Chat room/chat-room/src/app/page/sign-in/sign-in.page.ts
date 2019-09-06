import { Component } from '@angular/core';
import { SignInPageModule } from './sign-in.module';
import { NavController } from '@ionic/angular';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-home',
  templateUrl: 'sign-in.page.html',
  styleUrls: ['sign-in.page.scss'],
})
export class SignInPage {
  title = "Geeky - Chat Room";

  constructor(private navController: NavController) {}

  ngOnInit() {
  }

  onNavToRegister(){
    console.log("Navigating to Sign Up");
    this.navController.navigateForward('sign-up');
  }

  onSignIn(){
    this.navController.navigateForward('chat-rooms')
  }
}