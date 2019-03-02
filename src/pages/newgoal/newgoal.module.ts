import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewgoalPage } from './newgoal';

@NgModule({
  declarations: [
    NewgoalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewgoalPage),
  ],
})
export class NewgoalPageModule {}
