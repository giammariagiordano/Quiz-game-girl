import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import { Dialogs } from '@ionic-native/dialogs';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  ref = firebase.database().ref('user/');
  user = {
    email: "",
    username: "",
    password: "",
  }
  private passwordShown: boolean = false;
  private passwordType: string = "password"
  constructor(public navCtrl: NavController, public navParams: NavParams, private dialogs: Dialogs) {

  }
  public showPassword() {
    this.passwordShown = !this.passwordShown
    this.passwordType = !this.passwordShown ? "password" : "text"
  }
  doBackLogin() {
    this.navCtrl.pop();
  }

  doSignup() {
    let toSend = {
      email: this.user.email,
      username: this.user.username,
      password: this.user.password,
      score: 0
    };
    let regexPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    let regexpEmail = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');

    if (!regexPass.test(this.user.password)) {
      this.dialogs.alert('la password deve contenere almeno 8 caratteri, un carattere speciale, un carattere in maiuscolo e uno in minuscolo e un numero',"Password non valida")
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));

      //alert("")
    }
    else if (!regexpEmail.test(this.user.email)) {
      //alert("inserisci una email valida")
      this.dialogs.alert('inserisci una email valida',"Email non valida",)
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
    }
    else {
      firebase.auth().createUserWithEmailAndPassword(toSend.email, toSend.password)
        .then(user => {
          firebase.database().ref("Users").push(toSend);
          localStorage.setItem("email", toSend.email);
          localStorage.setItem("password", toSend.password);
          localStorage.setItem("username", toSend.username);
          this.navCtrl.push(HomePage, toSend);
        })
        .catch(err => { 
          this.dialogs.alert('Inserisci i dati correttamente')
          .then(() => console.log('Dialog dismissed'))
          .catch(e => console.log('Error displaying dialog', e));
         });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
