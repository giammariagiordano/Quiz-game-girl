import { Component, ViewChild } from '@angular/core';
import { Platform, App, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  @ViewChild(Nav) navCtrl: Nav;
  constructor(private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App, public alertCtrl: AlertController) {

    platform.ready().then(() => {
      // Okay, sothe platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if (localStorage.getItem("email") !== null) {
        this.rootPage = TabsPage;
      }
    });
    this.platform.registerBackButtonAction(() => {
      let nav = this.app.getActiveNav();

      let activeView = nav.getActive();
      if (activeView != null) {
        if (this.navCtrl.canGoBack) {
          if (activeView.name == "HomePage" || activeView.name == "ListViewPage" ||
            activeView.name == "AboutUsPage" || activeView.name == "LeaderBoardPage" || activeView.name == "LoginPage") {
            this.confirmExitApp();
          }
          else if (activeView.name == "SignupPage") {
            this.navCtrl.pop();
          }
          else if (activeView.name == "GamePage") {
            this.goHomeBack()
          }
          else {
            this.navCtrl.setRoot(TabsPage, { opentab: 1 });
          }
        }
      }
    });
  }
  confirmExitApp() {
    let alert = this.alertCtrl.create({
      title: 'Chiusura Applicazione',
      message: 'Vuoi veramente chiudere l\'applicazione?',
      buttons: [
        {
          text: 'no',
          role: 'no',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Buy clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }
  goHomeBack() {
    let alert = this.alertCtrl.create({
      title: 'Desideri abbandonare la partita?',
      message: 'Sei sicuro di voler abbandonare la partita? Il punteggio ottenuto fino ad adesso non verrà salvato',
      buttons: [
        {
          text: 'no',
          role: 'no',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Buy clicked');
            this.navCtrl.setRoot(TabsPage, { opentab: 1 });
          }
        }
      ]
    });
    alert.present();
  }
}


