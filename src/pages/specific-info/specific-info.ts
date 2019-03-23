import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SpecificInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specific-info',
  templateUrl: 'specific-info.html',
})
export class SpecificInfoPage {
  infoText:string
  nameGirl:string
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nameGirl= this.navParams.get("name");
    this.infoText = this.navParams.get("info")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecificInfoPage');
  }
  goToHome(){
    this.navCtrl.push(HomePage);
  }

}
