import { GamePage } from './../game/game';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListViewPage } from '../list-view/list-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParam : NavParams) {
  }
  
  generalInfo(){
    this.navCtrl.push(ListViewPage, this.navParam.data);
  }

  newGame(){
    this.navCtrl.push(GamePage, this.navParam.data);
  }
}
