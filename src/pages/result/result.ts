import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';
import { v } from '@angular/core/src/render3';

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
  private score:number;
  private council:string;
  private AnswerByUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get("score")
   // this.AnswerByUser = navParams.get("ans");
    //alert(JSON.stringify(this.AnswerByUser))
    this.email = localStorage.getItem("email")
    this.password = localStorage.getItem("password")
    firebase.auth().signInWithEmailAndPassword(this.email,this.password)
      .then( res => firebase.database().ref('Users').orderByChild('email').equalTo(this.email).once('child_added', v => {
      this.scoreTotal =  v.val().score+this.score;
      }))
      this.setCouncil(this.score);
  }

  setCouncil(score:number){
    if(this.score<=10){
      this.council = "Hai totalizzato un punteggio basso. Ti consiglio di riguardare bene la sezione delle Informazioni per migliorare il tuo punteggio"
    }
    else if(this.score >10 && this.score <=30){
      this.council = "Hai ottenuto un buon punteggio, ma puoi sempre migliorare!"
    }
    else {
      this.council ="Complimenti, sei davvero un campione!"
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }
}
