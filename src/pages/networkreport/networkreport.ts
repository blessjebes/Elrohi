import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the NetworkreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-networkreport',
  templateUrl: 'networkreport.html',
})
export class NetworkreportPage {
date_time:any;name_address:any;proprietor:any;contact_person:any;existing_biz:any;area_covering:any;comment:any;followup:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public emailComposer:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkreportPage');
  }
  send_nw_report(){
	  
	  let email = {
  to: 'ceo@elrohi.in',
  subject: 'Business Development Manager (Network) Report',
  body: '<p>Date & Time :' + this.date_time + "</p>" +
  '<p>Name & Address :' + this.name_address + '</p>' +
  '<p>Name of Proprietor :' + this.proprietor + '</p>' +
  '<p>Contact Person :' + this.contact_person + '</p>' +
  '<p>Existing Biz :' + this.existing_biz + '</p>' +
  '<p>Area & Divn. Covering :' + this.area_covering + '</p>' +
  '<p>Comment & Remarks :' + this.comment + '</p>' +
  '<p>Follow Up :' + this.followup + '</p>',
  isHtml: true
};
 console.log(email)
// Send a text message using default options
this.emailComposer.open(email);
  }

}
