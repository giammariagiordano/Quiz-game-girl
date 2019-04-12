import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { ResultPage } from '../result/result';



@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  private score: number;
  private CORRECT: number = 10;
  private UNCORRECT: number = -5;
  private questionNumber: number;
  private questions: any;
  private womanName: string[];
  private pool: any;
  private it: number;
  public currentQuestion: any;
  public seconds: any;
  public timer: any;
  public loading: boolean;
  public toSend;
  public username:string;
  //to get tabbar
  tabBarElement : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loading = false;
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
    this.seconds = 10;
    this.username = navParams.get("username");
    //to use tab bar
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.loadQuestion();
  }

  ionViewDidEnter() {
    this.createQuestion();
  }

  //to remove tab bar
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }
  //to reset tab bar
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
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
    this.restartTimerCounter();
    this.decrementSeconds();
    console.log(JSON.stringify(this.questions));
    this.loading = true;
    this.timer = setInterval(() => {
      this.decrementSeconds() // inizio a decrementarre i secondi
    }, 1000)
    if (this.it < this.questionNumber) { //se la domanda attuale è di indice inferiore posso andare avanti
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
    else{ // altrimenti ho finito le domande passo al listener answerToQuesion un event null perché non c'è stato un evento esterno
      //? avrei potuto fermare qui il timer e chiamare la push ma avrei replicato due linee di codice
      this.answerToQuestion(null)
    }
  }

  answerToQuestion(ev: Event) {
    if(ev != null){ // 
    let target = ev.srcElement.textContent.trim();
    this.score = (target == this.pool[this.currentQuestion.index].answer) ? this.score + this.CORRECT : this.score + this.UNCORRECT;
    }
    //crea la nuova domanda
    this.it++;
    //? e qui lasciare solo l'uguaglianza
    if (this.it >= this.questionNumber) {
      clearInterval(this.timer);
      this.loading = false;
      this.toSend ={score: this.score,username: this.username} 
      this.navCtrl.push(ResultPage,this.toSend);
    } else {
      setTimeout(() => {
        this.createQuestion();
      }, 500);
    }
  }

  restartTimerCounter() {
    this.seconds = 10;
    clearInterval(this.timer);
  }
  decrementSeconds() {
    this.seconds--;
    //console.log(this.seconds);
    if (this.seconds == 0) {
      //console.log("sono arrivato a zero");
      this.restartTimerCounter();
      this.it++;
      this.createQuestion();
    }

  }

}
