import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage'; 
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html', 
})
export class OrderPage {
	
	store:any; product_list:any[]=[];
public form 			: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _FB: FormBuilder,public storage:Storage,public emailComposer:EmailComposer) {
	  
	  this.form = this._FB.group({
         store_name       	  : ['', Validators.required],
         //product_name         : ['', Validators.required],
         products     : this._FB.array([
            this.ordered_products()
         ])
      });
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad OrderPage');
  }
 /** public anArray:any=[];

  goTo(){
	this.anArray.push({'product':this.prod},{'product_quantity':this.quant});   
   console.log('this.anArray',this.anArray);
   this.data=true;
   }
 Add(){
   this.anArray.push({'product':''},{'product_quantity':''});
   }
*/


 ordered_products() : FormGroup
   {
      return this._FB.group({ 
		 //store_name 		: [''],
		 product_name : [''],
		 product_quantity : ['', Validators.required]
		 
      });
   }
   
   
   addNewInputField() : void
   {
      const control = <FormArray>this.form.controls.products;
      control.push(this.ordered_products());
   }

   
   removeInputField(i : number) : void
   {
      const control = <FormArray>this.form.controls.products;
      control.removeAt(i);
   }
   
   
   complete_order(val : any) : void
   {
      console.log("complete");
	  console.dir(val);
	  console.dir(this.form.value.products);
	   this.storage.set('stored_order', this.form.value);
	   
	  this.sendorder();
	  
	
   }
   
   store_order()
   {
	  console.log("Store");
	  console.log(this.form.value);
	   this.storage.set('stored_order', this.form.value);
   
   }
   sendorder()
{

   let email = {
  to: 'ceo@elrohi.in',
  subject: 'New Order',  
  body: '<p>Store Name: ' + this.form.value.store_name + "</p>" +
  
  '<p>Products List :  ' + JSON.stringify(this.form.value.products) + '</p>',
  isHtml: true
};

console.log(email);
// Send a text message using default options
this.emailComposer.open(email);
}
   
}
