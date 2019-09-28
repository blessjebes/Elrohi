import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientphasePage } from './clientphase';
import { PeozzleDeviceStorage } from '../../services/peozzledevicestorage';

@NgModule({
  declarations: [
    ClientphasePage,
  ],
  imports: [
    IonicPageModule.forChild(ClientphasePage),
  ],
  providers: [PeozzleDeviceStorage],
})
export class ClientphasePageModule {}
