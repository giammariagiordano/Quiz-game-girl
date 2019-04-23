import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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
  private pool: any;
  private it: number;
  public seconds: any;
  public timer: any;
  public loading: boolean;
  public toSend;
  public arrayQuestions: any;
  public arrayAnswerByUser: any;
  public nextAns:boolean =false;
  public isSrcSet:boolean = false
  //to get tabbar
  tabBarElement: any;
  constructor(public navCtrl: NavController,private cd: ChangeDetectorRef) {
    this.resetParam();
    //to use tab bar
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    this.it = 0;
    this.loadQuestion();
  }
  private resetParam(){
    this.loading = false;
    this.score = 0;
    this.it = 0;
    this.questionNumber = 4;
    this.arrayQuestions = new Array();
    this.pool = new Array();
    this.seconds = 10;
    this.arrayAnswerByUser = new Array();
    this.nextAns =false;
    this.isSrcSet=false
  }

  ionViewDidEnter() {
    this.resetParam();
    this.loadQuestion();
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
    this.loading = false;
    firebase.database().ref("Questions").once('value', res => {
      res.val().forEach(element => {
        this.arrayQuestions.push({ question: element.question, real: element.realAnswer, ans: element.answer, src:element.src })
      });
      this.createPool();
    });
  }

  createPool() {
    this.mix(this.arrayQuestions.length, this.arrayQuestions);
    for (let i = 0; i < this.questionNumber; i++) {
      this.pool.push(this.arrayQuestions[i]);
    }
    this.createQuestion();
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
    this.isSrcSet=false
    this.restartTimerCounter();
  //  this.decrementSeconds();
    console.log("create question");

    this.timer = setInterval(() => {
       this.decrementSeconds() // inizio a decrementarre i secondi
       this.cd.detectChanges();
    }, 1000)
    if (this.it < this.questionNumber) { //se la domanda attuale è di indice inferiore posso andare avanti
      this.loading = true;
      if(this.arrayQuestions[this.it].src!=""){
        //alert(this.arrayQuestions[this.it].src)
        this.isSrcSet=true;
      }
      this.mix(4,this.arrayQuestions[this.it].ans)
      this.nextAns=true;
    }
    else { // altrimenti ho finito le domande passo al listener answerToQuesion un event null perché non c'è stato un evento esterno
      //? avrei potuto fermare qui il timer e chiamare la push ma avrei replicato due linee di codice
      this.answerToQuestion(null)
    }
  }

  answerToQuestion(ev: Event) {
    this.nextAns = false;
    if (ev != null) { 
     // let target = (<HTMLButtonElement>ev.target).value;
      let target = ev.srcElement.textContent.trim();
    this.score = (target == this.arrayQuestions[this.it].real) ? this.score + this.CORRECT : this.score + this.UNCORRECT;
    }
    
    //crea la nuova domanda
    this.it++;
    this.loading = false;
    //? e qui lasciare solo l'uguaglianza
    if (this.it >= this.questionNumber) {
      clearInterval(this.timer);
     
     // alert(JSON.stringify(this.arrayAnswerByUser))
      this.toSend = { score: this.score}
      this.navCtrl.push(ResultPage, this.toSend);
    } else {
      setTimeout(()=>{
        this.createQuestion();
      },500) //aggiornamento grafico 
    }
  }

  restartTimerCounter() {
    this.seconds = 10;
    clearInterval(this.timer);
  }

  decrementSeconds() {
    this.seconds--;
    console.log(this.seconds);
    if (this.seconds == 0) {
      console.log("sono arrivato a zero");
      this.restartTimerCounter();
      this.it++;
        this.createQuestion(); 
     
    }
  }
}