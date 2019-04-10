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
  toSend = {
    username:"",
    score:0
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toSend.score = navParams.get("score")
    this.toSend.username = navParams.get("username")
   /* firebase.database().ref('Users').orderByChild('email').equalTo(toSend.email).on('child_added', res => {
    });*/

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }
  goToHome(){
    this.navCtrl.push(HomePage,this.toSend);
  }
}
