import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import {forwardRef,NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage'; 

@NgModule({providers: [forwardRef(() => PeozzleDeviceStorage)]})
@Injectable()



export class PeozzleDeviceStorage {
	

constructor (public storage:Storage){}

/////////////////////////////////STORING PLACE ///////////////////////////////////////////////////////////

store_phase_details(items){
	console.log('App Bank Items ', items);

	//var json_cart_items = JSON.stringify(items);
this.storage.set('phase_details', items);


}




get_phase_details(){
	return this.storage.get('phase_details');
	
	}
}



