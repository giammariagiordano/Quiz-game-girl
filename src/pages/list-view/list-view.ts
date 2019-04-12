import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SpecificInfoPage } from '../specific-info/specific-info';
import { ChangeDetectorRef } from '@angular/core';
@IonicPage()
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html',
})
export class ListViewPage {
  searchTerm : string = ""
  private copyGeneralInfo:any;
  private user = {
    username: "",
  };

  private generalInfo = new Array<{
    name: string,
    info: string,
    src: string;    
  }>();

  data: any;
  toSend: any;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private cd: ChangeDetectorRef) {
    this.user.username = this.navParams.get('username');
    this.getGirlDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DmPage');
  } 

  getGirlDetails() {
    firebase.database().ref('GeneralInfo').orderByChild('name').on('child_added', res => {
      //for( let girl of res.val())
      this.generalInfo.push({ name: res.val().name, info: res.val().info, src: res.val().src });
      this.cd.detectChanges();

      //this.generalInfo.push({name: girl.name , info: girl.info, src:girl.src});
    });
    this.copyGeneralInfo = this.generalInfo;
    //this.cd.detectChanges();
  }

  public setFilteredItems = () => {
    this.resetChanges();
    this.generalInfo= this.generalInfo.filter((item)=>{
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1;
      //  return item.name.includes(this.searchTerm);
    })
    this.cd.detectChanges();
};

protected resetChanges = () => {
    this.generalInfo = this.copyGeneralInfo;
    //return this.generalInfo;
};


showInfo(girl){
  this.toSend = {
    Girl: girl,
    Username: this.user.username
  }
  this.navCtrl.push(SpecificInfoPage, this.toSend);
}
  
}