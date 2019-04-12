import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  scoreTotal:number = 0;
  private email:string;
  private password:string;
  private score:number
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get("score")
    this.email = localStorage.getItem("email")
    this.password = localStorage.getItem("password")
    firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      .then( res => firebase.database().ref('Users').orderByChild('email').equalTo(this.email).once('child_added', v => {
      this.scoreTotal =  v.val().score+this.score;
      }))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }
}
