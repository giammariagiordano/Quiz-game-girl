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
    private passwordShown:boolean = false;
    private passwordType : string ="password"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  public showPassword(){
    if(this.passwordShown){
      this.passwordShown= false;
        this.passwordType = "password"
    }
    else{
      this.passwordShown = true;
      this.passwordType ="text"
    }
  }
  doBackLogin(){
    this.navCtrl.pop();
  }

  doSignup(){
    let toSend = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      score:0
    };
    firebase.auth().createUserWithEmailAndPassword(toSend.email,toSend.password)
    .then( user => {
     firebase.database().ref("Users").push(toSend);
     localStorage.setItem("email", toSend.email);
     localStorage.setItem("password", toSend.password);
     localStorage.setItem("username", toSend.username);
      this.navCtrl.push(HomePage, toSend);
    })
    .catch( err => {alert("Compila i campi correttamente")});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
