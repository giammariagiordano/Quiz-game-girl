import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, Events,NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  ref= firebase.database().ref('user/');  
  user = {
      email:"",
      password:"",
      username: ""
    }

  constructor( public events: Events, public navCtrl: NavController) {
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad LoginPage');
  }

  goSignup(){
   this.navCtrl.push(SignupPage);
  }

  doLogin(){
      let toSend = {
        email: this.user.email,
        password: this.user.password,
        username: this.user.username,
      }
      toSend.email = this.user.email.toLowerCase();
      firebase.auth().signInWithEmailAndPassword(toSend.email,toSend.password)
      .then( res => firebase.database().ref('Users').orderByChild('email').equalTo(toSend.email).once('child_added', snapshot => {
        toSend.email= snapshot.val().email;
        toSend.password = snapshot.val().password;
        toSend.username = snapshot.val().username;
        localStorage.setItem("email", toSend.email);
        localStorage.setItem("password", toSend.password);
        localStorage.setItem("username", toSend.username);
        this.navCtrl.push(TabsPage, toSend);
      }))
      .catch( err => alert("Mail o password errate"))
    }
  }
//}
