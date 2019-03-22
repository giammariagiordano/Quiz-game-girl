import { GamePage } from './../game/game';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListViewPage } from '../list-view/list-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string
  constructor(public navCtrl: NavController, public navParam : NavParams) {
    this.username=navParam.get("username")
  }
  
  generalInfo(){
    this.navCtrl.push(ListViewPage, this.navParam.data);
  }

  newGame(){
    this.navCtrl.push(GamePage, this.navParam.data);
  }
}
