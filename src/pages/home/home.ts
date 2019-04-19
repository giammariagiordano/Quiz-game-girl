import { AddQuestionPage } from './../add-question/add-question';
import { LoginPage } from './../login/login';
import { GamePage } from './../game/game';
import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string
  private bar: any

  constructor(public navCtrl: NavController, public navParam : NavParams,private app: App) {
    this.username=localStorage.getItem("username");
  }
  
  ionViewDidEnter() {
    this.username=localStorage.getItem("username");
  }
  goToAddQuestion(){
    this.navCtrl.push(AddQuestionPage, this.navParam);
  }

  newGame(){
    this.navCtrl.push(GamePage);
  }

  logout(){
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("username");
    this.bar = document.querySelector('.tabbar.show-tabbar');
    this.bar.style.display = 'none';
    this.app.getRootNav().setRoot( LoginPage );


  }
}
