import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-question',
  templateUrl: 'add-question.html',
})
export class AddQuestionPage {
  private user = {
    username: "",
     };
  
  private generalInfo = new Array<{
    name: "",
    info: "",
    src :""
  }>();
  private question = new Array<{
      nameGirl:"",
      question: "",
      correctAnswer:"",
      uncorrectAnswer1:"",
      uncorrectAnswer2:""
      uncorrectAnswer4:"",
      source:""
  }>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //  this.user.username = this.navParams.get('username'); 

    this.getGirlDetails()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddQuestionPage');
  }
  getGirlDetails() {
    firebase.database().ref('GeneralInfo').orderByChild('name').on('child_added', res => {
      this.generalInfo.push({name:res.val().name , info: res.val().info, src:res.val().src});
      console.log( "add question: "+JSON.stringify(this.generalInfo));
    });
  }
  sendQuestion(){
    console.log("question send correct");
    
  }

}
