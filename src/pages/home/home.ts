import { LoginPage } from './../login/login';
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
  
  ionViewDidEnter() {
    this.username=this.navParam.get("username")
  }
  generalInfo(){
    this.navCtrl.push(ListViewPage, this.navParam);
  }

  newGame(){
    this.navCtrl.push(GamePage, this.navParam);
  }

  logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    this.navCtrl.push(LoginPage);
  }
}
