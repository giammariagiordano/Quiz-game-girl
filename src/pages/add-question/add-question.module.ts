import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddQuestionPage } from './add-question';

@NgModule({
  declarations: [
    AddQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(AddQuestionPage),
  ],
})
export class AddQuestionPageModule {}
