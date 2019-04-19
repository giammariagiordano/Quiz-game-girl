import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';
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
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = "password"
    }
    else {
      this.passwordShown = true;
      this.passwordType = "text"
    }
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
    if(!this.checkPass(this.user.password)){
      this.dialogs.alert('La password deve contenere almeno 8 caratteri, un numero, un carattere minuscolo, uno maiuscolo e un carattere speciale ',"Password non corretta")
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
    }else if(!this.checkEmail(this.user.email)){
      this.dialogs.alert('L\'email inserita non risulta valida',"Email non corretta")
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
    }
    
    else{
    firebase.auth().createUserWithEmailAndPassword(toSend.email, toSend.password)
      .then(user => {
        firebase.database().ref("Users").push(toSend);
        localStorage.setItem("email", toSend.email);
        localStorage.setItem("password", toSend.password);
        localStorage.setItem("username", toSend.username);
        this.navCtrl.setRoot(TabsPage, { opentab: 1 });

      })
      .catch(err => { alert("Compila i campi correttamente") });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  checkPass(e:string){  
    let reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})") //min 8 caratteri, 1 numero, 1 maiuscola e 1 minuscola e un carattere speciale
    return(reg.test(e))
  }
  checkEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}