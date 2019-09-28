import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemviewPage } from '../itemview/itemview';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
	product_selected:any;
	
	products =[
	'KERALA SANDAL',
	'TRIO PACK',
	'FAMILY 3 in 1 PACK',
	'VEP',
	'THRILL EXOTIC',
	'THRILL CHEMPAKAM',
	'KAIRALI LAVENDER',
	'KAIRALI LOVELY PINK',
	'KAIRALI JASMINE',
	'COALTAR',
	'KAIRALI',
	'WASHWELL'
	
	];
	
	weights=[
	'75g,125g,150g',
	'450g',
	'450g',
	'100g',
	'75g,125g',
	'75g',
	'100g',
	'100g',
	'100g',
	'100g',
	'75g',
	'125g',
	];
	
	variants=[
	'Single',
	'Single',
	'Single',
	'Single,Banded',
	'Single',
	'Single,Banded',
	'Single',
	'Single',
	'Single',
	'Single,Banded',
	'Single',
	'Single',
	'Single',
	];
	
	mrp =[
	'₹35, ₹58, ₹68',
	'₹198',
	'₹170',
	'₹28, ₹80',
	'₹29, ₹46',
	'₹23, ₹65',
	'₹25',
	'₹25',
	'₹23, ₹65',
	'₹15',
	'₹15',
	'₹15',
	];
	
	images_list=[
	'assets/imgs/thumbnails/0.png',
	'assets/imgs/thumbnails/1.png',
	'assets/imgs/thumbnails/2.png',
	'assets/imgs/thumbnails/3.png',
	'assets/imgs/thumbnails/4.png',
	'assets/imgs/thumbnails/5.png',
	'assets/imgs/thumbnails/6.png',
	'assets/imgs/thumbnails/7.png',
	'assets/imgs/thumbnails/8.png',
	'assets/imgs/thumbnails/9.png',
	'assets/imgs/thumbnails/10.png',
	'assets/imgs/thumbnails/11.png',
	'assets/imgs/thumbnails/12.png',
	];
	
	
	
	 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }
  
  itemviewpage(product_se){
	  
	  //this.navCtrl.push("ItemviewPage");
	  console.log("Product:"+product_se);
	  this.navCtrl.push("ItemviewPage",{data: product_se});
  }

}
