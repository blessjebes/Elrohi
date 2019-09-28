import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendreportPage } from './sendreport';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

@NgModule({
  declarations: [
    SendreportPage,
  ],
  imports: [
    IonicPageModule.forChild(SendreportPage),
  ],
})
export class SendreportPageModule {}
