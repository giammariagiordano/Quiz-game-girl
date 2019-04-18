import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import * as emailDev from '../../app/email.json'
@IonicPage()
@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
})
export class AddQuestionPage {

  question: string;
  realAns: string;
  ans1: string;
  ans2: string;
  ans3: string;
  source: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuestionPage');
  }

  goToHomePage(){
    this.navCtrl.pop();
  }
  sendEmail() {
    if (this.question == undefined || this.realAns == undefined || this.ans1 == undefined ||
      this.ans2 == undefined || this.ans3 == undefined || this.source == undefined) {
      alert("Inserisci tutti i campi")
    }

    else {
      this.emailComposer.isAvailable().then((available: boolean) =>{
        if(available) {
          //Now we know we can send
        }
       });
       let dEmail= (<any>emailDev).email;

       let email = {
         to: dEmail,
         subject: 'Add Question',
         body: 'question:' + this.question + "\n real answer: " + this.realAns + "\n risposta sbagliata:" + this.ans1 + "\n" +
         "risposta sbagliata:" + this.ans2 + "\n rispsota sbagliata:" + this.ans3 + "\n fonte:" + this.source,
         isHtml: true
       };
       // Send a text message using default options
       this.emailComposer.open(email);
    }
  }

}


