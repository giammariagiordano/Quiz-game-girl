import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  private score: number;
  private questions: any;
  private womanName: string[];
  private question = {
    QA: {
      question: "",
      answer: ""
    },
    wrong : ["", "", ""]
    };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = 0;
    this.questions = new Array();
    this.womanName = new Array();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.loadQuestion();
  }

  loadQuestion(){
    firebase.database().ref("Questions").once( 'value', res => {
      res.val().forEach(element => {
        this.questions.push(element);
        this.womanName.push(element.answer);
      });
      this.createQuestion();
    });
  }

   createQuestion(){
      let len = this.questions.length;
      let chosen = Math.floor(Math.random() * len);
      this.question.QA.question = this.questions[chosen].question;
      this.question.QA.answer = this.questions[chosen].answer;
      this.questions.splice(chosen,1);//rimuove la domanda scelta
      let index = this.womanName.indexOf(this.question.QA.answer, 0);
      if(index > -1 ){
        this.womanName.splice(index,1);
      }
      this.createChoise();
  }

   createChoise(){
    let len = this.womanName.length;
      for(let i=0; i<3; i++){
        let chosen = Math.floor(Math.random() * len);
        this.question.wrong[i]= this.womanName[chosen];
        let index = this.womanName.indexOf(this.womanName[chosen], 0);
        if(index > -1 ){
        this.womanName.splice(index,1);
        }
        len = this.womanName.length;
      }
      this.womanName.push(this.question.QA.answer);
      for(let i=0; i<3; i++){
        this.womanName.push(this.question.wrong[i]);
      }
  }

  answerToQestion(ev:Event){
    let target = ev.target as HTMLButtonElement;
    this.score = (target.value == this.question.QA.answer)? this.score + 10 : this.score - 5;
    //crea la nuova domanda this.createQuestion();
    alert(this.score);
  }

}
