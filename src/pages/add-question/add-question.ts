import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
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
  soruce: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuestionPage');
  }
  sendEmail() {
    
    if (this.question == undefined || this.realAns == undefined || this.ans1 == undefined || 
      this.ans2 == undefined || this.ans3 == undefined || this.soruce == undefined){
      alert("Inserisci tutti i campi")
    }
    else {
      let email = {
        to: "fakeEmail@fake.com",
        subject: 'New question',
        body: 'question:' + this.question + "\n real answer: " + this.realAns + "\n risposta sbagliata:" + this.ans1 + "\n" +
          "risposta sbagliata:" + this.ans2 + "\n rispsota sbagliata:" + this.ans3 + "\n fonte:" + this.soruce,
        isHtml: true
      }
      this.emailComposer.open(email);
    }
  }

}
