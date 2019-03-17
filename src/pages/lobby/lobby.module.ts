import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby';

@NgModule({
  declarations: [
    LobbyPage,
  ],
  imports: [
    IonicPageModule.forChild(LobbyPage),
  ],
})
export class LobbyPageModule {}
