import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infoText = this.navParams.data
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecificInfoPage');
  }

}
