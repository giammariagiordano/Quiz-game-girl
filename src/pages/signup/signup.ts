import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  ref= firebase.database().ref('user/');  
  user = {
      email:"",
      username:"",
      password:"",
    }
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  doSignup(){
    let toSend = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
    };
    firebase.auth().createUserWithEmailAndPassword(toSend.email,toSend.password)
    .then( user => {
     firebase.database().ref("Users").push(toSend);
      this.navCtrl.push(HomePage, toSend);
    })
    .catch( err => {alert("Compila i campi correttamente")});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
