import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, Events,NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SignupPage } from '../signup/signup';
import { Dialogs } from '@ionic-native/dialogs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  ref= firebase.database().ref('user/');  
  tabBarElement:any;
  user = {
      email:"",
      password:"",
      username: ""
    }
    passwordType: string = "password";
    passwordShown :boolean = false;

  constructor( public events: Events, public navCtrl: NavController,private dialogs: Dialogs) {
    //this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.tabBarElement = document.getElementsByClassName('show-tabbar').item(0);

  }
  //nasconde la password o la mostra in base ad un valore boolean
  public showPassword(){
    this.passwordShown = !this.passwordShown
    this.passwordType = !this.passwordShown ? "password" :"text"
  }
  //to remove tab bar
  ionViewWillEnter() {
    //this.tabBarElement.style.display = 'none';
  }
  //to reset tab bar
  ionViewWillLeave() {
   // this.tabBarElement.style.display = 'flex';
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
      .catch( err =>{
        this.dialogs.alert('Le credenziali inserite non sono valide',"Inserisci credenziali valide")
        .then(() => console.log('Dialog dismissed'))
        .catch(e => console.log('Error displaying dialog', e));
      })
    }
  }
//}
