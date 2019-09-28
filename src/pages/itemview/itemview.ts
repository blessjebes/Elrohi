import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemview',
  templateUrl: 'itemview.html',
})
export class ItemviewPage {
	
	public products: any = [];
	weights=[];
	mrp=[];
	images_list:any=[];
product_selected:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.product_selected="";
	  this.product_selected = navParams.get('data');
	  console.log(' ItemviewPage:'+this.product_selected);
	  if (this.product_selected=="KERALA SANDAL"){
		  this.products =['KERALA SANDAL - 75g','KERALA SANDAL -125g','KERALA SANDAL -150g'];
		  this.weights=['75g','125g','150g'];
		  this.mrp=['₹35', '₹58', '₹68'];
		  this.images_list=['assets/imgs/products/1.1.jpg','assets/imgs/products/1.2.jpg','assets/imgs/products/1.3.jpeg',];
		  
	  }
	  if (this.product_selected=="TRIO PACK"){
		  this.products =['KERALA SANDAL TRIO PACK'];
		  this.weights=['450g'];
		  this.mrp=['₹198'];
		  this.images_list=['assets/imgs/products/2.jpg'];
		  
	  }
	  
	  if (this.product_selected=="FAMILY 3 in 1 PACK"){
		  this.products =['FAMILY 3 in 1 PACK'];
		  this.weights=['450g'];
		  this.mrp=['₹170'];
		  this.images_list=['assets/imgs/products/3.jpg'];
		  
	  }
	  if (this.product_selected=="VEP"){
		  this.products =['VEP','VEP Banded'];
		  this.weights=['100g','3*100g'];
		  this.mrp=['₹28','₹80'];
		  this.images_list=['assets/imgs/products/4.1.jpg','assets/imgs/products/4.2.jpg'];
		  
	  }
	  if (this.product_selected=="THRILL EXOTIC"){
		  this.products =['THRILL EXOTIC -75g','THRILL EXOTIC -125g'];
		  this.weights=['75g','125g'];
		  this.mrp=['₹29','₹46'];
		  this.images_list=['assets/imgs/products/5.1.jpg','assets/imgs/products/5.2.jpg'];
		  
	  }
	  if (this.product_selected=="THRILL CHEMPAKAM"){
		  this.products =['THRILL CHEMPAKAM','THRILL CHEMPAKAM Banded'];
		  this.weights=['75g','3*75g'];
		  this.mrp=['₹23','₹65'];
		  this.images_list=['assets/imgs/products/6.1.jpg','assets/imgs/products/6.2.jpg'];
		  
	  }
	  if (this.product_selected=="KAIRALI LAVENDER"){
		  this.products =['KAIRALI LAVENDER'];
		  this.weights=['100g'];
		  this.mrp=['₹25'];
		  this.images_list=['assets/imgs/products/7.jpg'];
		  
	  }
	  if (this.product_selected=="KAIRALI LOVELY PINK"){
		  this.products =['KAIRALI LOVELY PINK'];
		  this.weights=['100g'];
		  this.mrp=['₹25'];
		  this.images_list=['assets/imgs/products/8.jpg'];
		  
	  }
	  if (this.product_selected=="KAIRALI JASMINE"){
		  this.products =['KAIRALI JASMINE','KAIRALI JASMINE Banded'];
		  this.weights=['100g','3*100g'];
		  this.mrp=['₹23','₹65'];
		  this.images_list=['assets/imgs/products/9.1.jpeg','assets/imgs/products/9.2.jpg'];
		  
	  }
	  if (this.product_selected=="COALTAR"){
		  this.products =['COALTAR'];
		  this.weights=['100g'];
		  this.mrp=['₹15'];
		  this.images_list=['assets/imgs/products/10.jpg'];
		  
	  }
	  if (this.product_selected=="KAIRALI"){
		  this.products =['KAIRALI'];
		  this.weights=['75g'];
		  this.mrp=['₹15'];
		  this.images_list=['assets/imgs/products/11.jpg'];
		  
	  }
	  
	  if (this.product_selected=="WASHWELL"){
		  this.products =['WASHWELL'];
		  this.weights=['125g'];
		  this.mrp=['₹15'];
		  this.images_list=['assets/imgs/products/12.jpg'];
		  
	  }
	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemviewPage:'+this.product_selected);
  }

}
