import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-leader-board',
  templateUrl: 'leader-board.html',
})
export class LeaderBoardPage {
  public leaderBoard = new Array;
  constructor(public navCtrl: NavController, public navParams: NavParams, private cd: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderBoardPage');
    this.fillLeaderBoard();
  }
  fillLeaderBoard() {
    firebase.database().ref('Users').orderByChild('score').on('child_added', res => {
      //for( let girl of res.val())
      this.leaderBoard.push({ username: res.val().username, score: res.val().score});
      this.cd.detectChanges();
      //this.generalInfo.push({name: girl.name , info: girl.info, src:girl.src});
    });
    console.log(this.leaderBoard)
  

    
    //this.cd.detectChanges();
  }

}
