import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as firebase from 'firebase';
import { SpecificInfoPage } from '../specific-info/specific-info';

@IonicPage()
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html',
})
export class ListViewPage {

  private user = {
    username: "",
     };
  
     private generalInfo = new Array<{
     name: "",
     info: "",
     src :""
   }>();

   data:any;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.user.username = this.navParams.get('username'); 
    this.getGirlDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DmPage');
  }

  getGirlDetails() {
    firebase.database().ref('GeneralInfo').orderByChild('name').on('child_added', res => {
      //for( let girl of res.val())
      this.generalInfo.push({name:res.val().name , info: res.val().info, src:res.val().src});
      //this.generalInfo.push({name: girl.name , info: girl.info, src:girl.src});
    });
  }

  onInput(ev: any) {
    /*const val = ev.target.value;
    let temp = this.dealerList;
    if (val && val.trim() != '' && this.dealerList.length == 0) {
      this.dealerList = temp.filter((item) => {
        return ((item.nome + " " + item.cognome).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else if (val && val.trim() != '') {
      this.dealerList = this.dealerList.filter((item) => {
        return ((item.nome + " " + item.cognome).toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.dealerList = this.dLTemp;
    }*/
  }
  showInfo(girl){

    this.navCtrl.push(SpecificInfoPage, girl);
  }


  seeListEvent(dealer) {
    /*this.getAllEvents(dealer).then(res => {
      this.presentModal();
    })*/
  }

  getAllEvents(dealer) {
   /* return new Promise((resolve, reject) => {
      firebase.database().ref("Users/" + dealer + "/EventiIscritto").on("child_added", res => {
        firebase.database().ref("Evento/" + res.val()).once("value", ev => {
          //alert(ev.val().data + " " + ev.val().locandina + " " + ev.val().luogo + " " + ev.val().nome + " " + ev.val().scadenza + " " + ev.val().speaker)
          firebase.database().ref("Evento/" + res.val() + "/trainer").once("value", tr => {
            let element = {
              data: ev.val().data, locandina: ev.val().locandina, luogo: ev.val().luogo, nome: ev.val().nome,
              scadenza: ev.val().scadenza, speaker: ev.val().speaker, trainer: { email: tr.val().email, lavoraPer: tr.val().lavoraPer, username: tr.val().username }
            };
            firebase.storage().ref(element.locandina).getDownloadURL().then(res => {
              element.locandina = res;
              this.listEventOfDealer.push(element);
              resolve(this.listEventOfDealer);
            })
          });
        })
      })
    })*/
  }

  
}
