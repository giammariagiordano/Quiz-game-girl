
import { Component } from '@angular/core';
import { IonicPage, Events,NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  ref= firebase.database().ref('user/');  
  user = {
      email:"",
      pin:"",
      username: ""
    }

  constructor( public events: Events, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goSignup(){
   this.navCtrl.push(SignupPage);
  }

  doLogin(){
    let toSend = {
      email: this.user.email,
      pin: this.user.pin,
      username: this.user.username,
    }
    firebase.auth().signInWithEmailAndPassword(toSend.email,toSend.pin)
    .then( res => firebase.database().ref('Users').orderByChild('email').equalTo(toSend.email).once('child_added', snapshot => {
      toSend.email= snapshot.val().email;
      toSend.pin = snapshot.val().pin;
      toSend.username = snapshot.val().username;
     this.navCtrl.push(HomePage, toSend);
     //alert("loggato");
    }))
    .catch( err => alert("Mail o password errate"))
  }
}
