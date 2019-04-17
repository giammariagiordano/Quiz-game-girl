import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  private council: string;
  private email: string;
  //private password: string;
  private score: number;
  //private AnswerByUser: any;
  private ref: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = navParams.get("score")
    this.email = localStorage.getItem("email")
    //this.password = localStorage.getItem("password")
    this.ref = firebase.database().ref("Users");
    
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
    this.ref.orderByChild('email').equalTo(this.email).on("child_added", (snapshot) => {
      let result = snapshot.val();
      let key = snapshot.key;
      result.score += this.score;
      this.scoreTotal = result.score;
      this.ref.child(key).update(result);
    });
    
    this.setCouncil(this.score);
  }


}
