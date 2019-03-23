import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ResultPage } from '../result/result';

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
  private CORRECT: number = 10;
  private UNCORRECT: number = -5;
  private NA: number = 0;
  private questionNumber: number;
  private questions: any;
  private womanName: string[];
  private pool: any;
  private it: number;
  public currentQuestion: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score = 0;
    this.it = 0;
    this.questionNumber = 4;
    this.questions = new Array();
    this.womanName = new Array();
    this.pool = new Array();
    this.currentQuestion = {
      question: "",
      index: 0,
      choice: ["", "", "", ""]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.loadQuestion();
  }

  ionViewDidEnter() {
    this.createQuestion();
  }

  loadQuestion() {
    firebase.database().ref("Questions").once('value', res => {
      res.val().forEach(element => {
        this.questions.push(element);
        this.womanName.push(element.answer);
      });
      this.createPool();
    });
  }

  createPool() {
    this.mix(this.questions.length, this.questions);
    for (let i = 0; i < this.questionNumber; i++) {
      this.pool.push(this.questions[i]);
    }
  }

  /**
   * giro di stupid sort 
   */
  private mix(len: number, toSort: Array<string>) { //todo aggiungere len e array parametrico
    for (let i = 0; i < len; i++) {
      let rndIndex = Math.floor(Math.random() * len);
      let app = toSort[i];
      toSort[i] = toSort[rndIndex];
      toSort[rndIndex] = app;
    }
  }

  createQuestion() {
    this.currentQuestion.question = this.pool[this.it].question;
    this.currentQuestion.index = this.it;
    let choice = this.currentQuestion.choice;
    choice[0] = this.pool[this.it].answer;
    let index = this.womanName.indexOf(choice[0]);
    if (index > -1) {
      this.womanName.splice(index, 1);
    }

    for (let i = 1; i < 4; i++) {
      let wLen = this.womanName.length;
      let rndIndex = Math.floor(Math.random() * wLen);
      choice[i] = this.womanName[rndIndex];
      let index = this.womanName.indexOf(choice[i]);
      if (index > -1) {
        this.womanName.splice(index, 1);
      }
    }
    this.womanName.push(choice[0]);
    for (let i = 1; i < 4; i++) {
      this.womanName.push(choice[i]);
    }
    this.mix(4, choice);
  }

  answerToQuestion(ev: Event) {
    let target = ev.target as HTMLButtonElement;
    this.score = (target.value == this.pool[this.currentQuestion.index].answer) ? this.score + this.CORRECT : this.score + this.UNCORRECT;
    //crea la nuova domanda
    this.it++;
    if (this.it == this.questionNumber) {
      this.navCtrl.push(ResultPage, this.score);
    } else {
      setTimeout(() => {
        this.createQuestion();
      },
        1000);

    }


  }

}
