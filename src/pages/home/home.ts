import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsPage } from '../products/products';
import { SummaryPage } from '../summary/summary';
import { SendreportPage } from '../sendreport/sendreport';
import { NetworkreportPage } from '../networkreport/networkreport';
@Component({
  selector: 'page-home',  
  templateUrl: 'home.html'
})   
export class HomePage {

  constructor(public navCtrl: NavController) {
 
  }
  productspage(){
  this.navCtrl.push("ProductsPage");
  }
  orderpage(){
	  this.navCtrl.push("OrderPage");
	  
  }
  lastsummarypage(){
	  this.navCtrl.push("SummaryPage");
	  
  }
  sendreportpage(){
	  this.navCtrl.push("SendreportPage");
	  
  }
  networkreportpage(){
	  this.navCtrl.push("NetworkreportPage");
	  
  }

  
}
