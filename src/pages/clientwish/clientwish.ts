import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientphasePage } from '../clientphase/clientphase';

/**
 * Generated class for the ClientwishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientwish',
  templateUrl: 'clientwish.html',
})
export class ClientwishPage {
	

items = [ 
    '1. Kay wants, "Become a staffing vendor for more employers (hiring companies/clients)."',
    '2. Kay wants, "Actively interact with more hiring managers within those employers."',
    '3. Kay wants, "Receive more job openings from those hiring managers."',
    '4. Kay wants, "Submit suitable candidates for those job openings faster than competition."',
    '5. Kay wants, "Submitted candidates to stand out from the competing candidates."',
    '6. Kay wants, "Submitted candidates to out perform the competing candidates."',
    '7. Kay wants, "Submitted candidates to be selected for the job opening."',
    '8. Kay wants, " Candidate turned consultant to perform the best at work."',
    '9. Kay wants, " Hiring manager to be delighted with the performance of the consultant and receive positive feedback."',
    '10. Kay wants, " Hiring manager to continue to extend as realistically possible."',
    '11. Kay wants, " Hiring manager to ask for more similar candidates."',
    '12. Kay wants, " Hiring manager to hire the same candidate for future job openings."',
    '13. Kay wants, " Repeat this success with other employers, hiring managers and consultants."'
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientwishPage');
  }
clientphasepage(){
	  this.navCtrl.push("ClientphasePage");
	
}
 
}
