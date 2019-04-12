import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
})
export class AddQuestionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public girls= [
    "hai","mica","una","amaca"
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuestionPage');
  }

}
