import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecificInfoPage } from './specific-info';

@NgModule({
  declarations: [
    SpecificInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecificInfoPage),
  ],
})
export class SpecificInfoPageModule {}
