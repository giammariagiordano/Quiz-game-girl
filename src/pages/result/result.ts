import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  score:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score= navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }
  goToHome(){
    this.navCtrl.push(HomePage);

  }
}
