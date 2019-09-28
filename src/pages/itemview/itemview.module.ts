import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemviewPage } from './itemview';

@NgModule({
  declarations: [
    ItemviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemviewPage),
  ],
})
export class ItemviewPageModule {}
