import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'; 
/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',

})
export class SummaryPage {

  store_name:any; products:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
	  
	  //this.details=this.storage.get('stored_order');
	  this.storage.get('stored_order').then((data) => {
					this.store_name=data.store_name;
					this.products=data.products;
					console.log(data.products);
	  
	  });

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
  }

}
