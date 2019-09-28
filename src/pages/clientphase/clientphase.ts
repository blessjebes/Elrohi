import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PeozzleDeviceStorage } from '../../services/peozzledevicestorage';
import { SummaryPage } from '../summary/summary';

/**
 * Generated class for the ClientphasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@IonicPage()
@Component({
  selector: 'page-clientphase', 
  templateUrl: 'clientphase.html',  
  providers: [PeozzleDeviceStorage]
})
export class ClientphasePage { 
	
	public details:any[]=[];public navTitle:string;
	phase_1:boolean;phase_2:boolean;phase_3:boolean;phase_4:boolean;phase_5:boolean;phase_6:boolean;phase_7:boolean;
	phase_8:boolean;phase_9:boolean;phase_10:boolean;phase_12:boolean;phase_13:boolean;phase_14:boolean;phase_15:boolean;phase_11:boolean;
	
	dg_1:number;year_goal_1:number;current_state_1:number;importance_1:any;
	dg_2:number;year_goal_2:number;current_state_2:number;importance_2:any;
	dg_3:number;year_goal_3:number;current_state_3:number;importance_3:any;
	dg_4:number;year_goal_4:number;current_state_4:number;importance_4:any;
	dg_5:number;year_goal_5:number;current_state_5:number;importance_5:any;
	dg_6:number;year_goal_6:number;current_state_6:number;importance_6:any;
	dg_7:number;year_goal_7:number;current_state_7:number;importance_7:any;
	dg_8:number;year_goal_8:number;current_state_8:number;importance_8:any;
	dg_9:number;year_goal_9:number;current_state_9:number;importance_9:any;
	dg_10:number;year_goal_10:number;current_state_10:number;importance_10:any;
	dg_11:number;year_goal_11:number;current_state_11:number;importance_11:any;
	dg_12:number;year_goal_12:number;current_state_12:number;importance_12:any;
	dg_13:number;year_goal_13:number;current_state_13:number;importance_13:any;
	dg_14:number;year_goal_14:number;current_state_14:number;importance_14:any;
	dg_15:number;year_goal_15:number;current_state_15:number;importance_15:any;
	
	items = [ 
    '1.Kay wants to be a staffing vendor for more employers (hiring company/client).',
    '2.Kay wants to be actively interacting with more hiring managers within those employers.',
    '3.Kay wants to receive more job openings from those hiring managers.',
    '4.Kay wants to submit suitable candidates for those job openings faster than competition.',
    '5.Kay wants the submitted candidates to stand out from the competing candidates.',
    '6.Kay wants the submitted candidates to out perform the competing candidates.',
    '7.Kay wants the submitted candidates to be selected for the job opening.',
    '8.Kay wants the candidate turned consultant to perform the best at work.',
    '9.Kay wants the hiring manager to be delighted with the performance of the consultant and receive positive feedback.',
    '10.Kay wants the hiring manager to continue to extend as realistically possible.',
    '11.Kay wants the hiring manager to ask for more similar candidates.',
    '12.Kay wants the hiring manager to hire the same candidate for future job openings.',
    '13.Kay wants to repeat this success with other employers, hiring managers and consultants.'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public peozzlestorage:PeozzleDeviceStorage) { 
	  this.client_phase_1(); 
	  
  }
  

  client_phase_1(){this.phase_1 = true; this.phase_2 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false; this.navTitle="Acquisition";}
  
  client_phase_2(){this.phase_2 = true; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Acquisition","Key":"Become a staffing vendor for employers (hiring company/client)","KPI Unit":"Count","DreamGoal":this.dg_1,"yearGoal":this.year_goal_1,"CurrentState":this.current_state_1,"Importance":this.importance_1});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Engagement";
  }
  
  client_phase_3(){this.phase_1 = false; this.phase_2 = false;this.phase_3 = true;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
   this.details.push({"Phase":"Engagement","Key":"Actively interact with hiring managers within those employers","KPI Unit":"Count","DreamGoal":this.dg_2,"yearGoal":this.year_goal_2,"CurrentState":this.current_state_2,"Importance":this.importance_2});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Job Order";
}
  
  client_phase_4(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = true;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Job Order","Key":"Receive job openings from those hiring managers","KPI Unit":"Count","DreamGoal":this.dg_3,"yearGoal":this.year_goal_3,"CurrentState":this.current_state_3,"Importance":this.importance_3});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Proposal";
  }
  
  client_phase_5(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = true;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
   this.details.push({"Phase":"Proposal","Key":"Submit suitable candidates for those job openings faster than competition","KPI Unit":"percentage","DreamGoal":this.dg_4,"yearGoal":this.year_goal_4,"CurrentState":this.current_state_4,"Importance":this.importance_4});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Screening";
  }
  
  client_phase_6(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = true;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Screening","Key":"Submitted candidates stand out from the competing candidates","KPI Unit":"percentage","DreamGoal":this.dg_5,"yearGoal":this.year_goal_5,"CurrentState":this.current_state_5,"Importance":this.importance_5});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Interview";
  }
  
  client_phase_7(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = true;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Interview","Key":"Submitted candidates out-perform competing candidates","KPI Unit":"percentage","DreamGoal":this.dg_6,"yearGoal":this.year_goal_6,"CurrentState":this.current_state_6,"Importance":this.importance_6});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Result";
  }
  
  client_phase_8(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = true;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Result","Key":"Submitted candidates are selected for the job opening","KPI Unit":"percentage","DreamGoal":this.dg_7,"yearGoal":this.year_goal_7,"CurrentState":this.current_state_7,"Importance":this.importance_7});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Performance";
  }
  
  client_phase_9(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = true;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Performance","Key":"Candidate turned consultant performs the best at work","KPI Unit":"percentage","DreamGoal":this.dg_8,"yearGoal":this.year_goal_8,"CurrentState":this.current_state_8,"Importance":this.importance_8});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Feedback";
  }
  
  client_phase_10(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = true;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Feedback","Key":"Hiring manager is delighted with the performance of the consultant","KPI Unit":"percentage","DreamGoal":this.dg_9,"yearGoal":this.year_goal_9,"CurrentState":this.current_state_9,"Importance":this.importance_9});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Extension";
  }
  
  client_phase_11(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = true;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Extension","Key":"Hiring manager continues to extend as realistically possible","KPI Unit":"percentage","DreamGoal":this.dg_10,"yearGoal":this.year_goal_10,"CurrentState":this.current_state_10,"Importance":this.importance_10});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Repeat Business";
  }
  
  client_phase_12(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = true;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Repeat Business","Key":"Hiring manager asks for similar candidates","KPI Unit":"percentage","DreamGoal":this.dg_11,"yearGoal":this.year_goal_11,"CurrentState":this.current_state_11,"Importance":this.importance_11});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Repeat Business";
  }
  
  client_phase_13(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = true;this.phase_14 = false;this.phase_15 = false;
  this.details.push({"Phase":"Repeat Business","Key":"Hiring manager re-hires the same candidate for future job openings","KPI Unit":"percentage","DreamGoal":this.dg_12,"yearGoal":this.year_goal_12,"CurrentState":this.current_state_12,"Importance":this.importance_12});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Feedback";
  }
  
  client_phase_14(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = true;this.phase_15 = false;
  this.details.push({"Phase":"Feedback","Key":"Consultant is delighted with the consulting engagement","KPI Unit":"percentage","DreamGoal":this.dg_13,"yearGoal":this.year_goal_13,"CurrentState":this.current_state_13,"Importance":this.importance_13});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Repeat Business";
  }
  
  client_phase_15(){this.phase_2 = false; this.phase_1 = false;this.phase_3 = false;this.phase_4 = false;this.phase_5 = false;this.phase_6 = false;
  this.phase_7 = false;this.phase_8 = false;this.phase_9 = false;this.phase_10 = false;this.phase_11 = false;this.phase_12 = false;
  this.phase_13 = false;this.phase_14 = false;this.phase_15 = true;
  this.details.push({"Phase":"Repeat Business","Key":"Consultant asks for similar consulting engagements","KPI Unit":"percentage","DreamGoal":this.dg_14,"yearGoal":this.year_goal_14,"CurrentState":this.current_state_14,"Importance":this.importance_14});
  this.peozzlestorage.store_phase_details(this.details);this.navTitle="Repeat Business";
  }
  
  submit(){
	  
	  this.details.push({"Phase":"Repeat Business","Key":"Repeat this success with other employers, hiring managers and consultants","KPI Unit":"percentage","DreamGoal":this.dg_15,"yearGoal":this.year_goal_15,"CurrentState":this.current_state_15,"Importance":this.importance_15});
  this.peozzlestorage.store_phase_details(this.details);
  this.navCtrl.push("SummaryPage");
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientphasePage');
  }

}
