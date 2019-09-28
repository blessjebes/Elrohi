import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Platform } from 'ionic-angular';
/**
 * Generated class for the SendreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendreport',
  templateUrl: 'sendreport.html',
})
export class SendreportPage {
		latitude:any; longitude:any;store_name:any;retailer_name:any;

  constructor(public navCtrl: NavController,public platform: Platform, public navParams: NavParams,public emailComposer:EmailComposer,public locationAccuracy: LocationAccuracy,public geolocation: Geolocation) {
	  
	  this.geolocation.getCurrentPosition().then(resp => {
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);
}).catch((error) => {
  console.log('Error getting location', error);
});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendreportPage');
	this.location_accuracy();
	//this.find_location();
	this.platform.ready().then(() => this.find_location());
  }
  
 location_accuracy(){
	 this.locationAccuracy.canRequest().then((canRequest: boolean) => {

  if(canRequest) {
    // the accuracy option will be ignored by iOS
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => console.log('Request successful'),
      error => console.log('Error requesting location permissions', error)
    );
  }

});
 }
 
 find_location(){
	 let options = {
      enableHighAccuracy:true
    };
	this.geolocation.getCurrentPosition(options).then((resp) => {

	this.latitude=resp.coords.latitude;
	this.longitude=resp.coords.longitude;
	console.log('Latitude:',this.latitude );
	console.log('Latitude:',this.longitude );
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {

});
 }
  
sendreport()
{
   
   let email = {
  to: 'ceo@elrohi.in',
  subject: 'Retailer Report',
  body: '<p>Retailer Name: ' + this.retailer_name + "</p>" +
  '<p>Store Name:  ' + this.store_name + '</p>' +
  '<p>Link : https://maps.google.com/?q='+this.latitude+','+this.longitude+'</p>',
  isHtml: true
};
console.log(email);
// Send a text message using default options
this.emailComposer.open(email);
}
}
