import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { MemberService, Member } from '../fitness.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, CommonModule]
})

export class Tab2Page {

  data : Member[];

  constructor (private members: MemberService) {
    
    // members.doAdd({
    //   id: 1,
    //   name: "Aina",
    //   dateOfBirth: new Date(),
    //   gender: "Female",
    //   membershipType: "Student",
    //   membershipStartDay: new Date(),
    //   contactNumber: 0o431706474,
    //   email: "e.jung.10@student.scu.edu.au",
    //   residentialAddress: "396 Coolangatta Rd, Bilinga",
    //   emergencyContactNumber: 0o431706474,
    //   medicalCondition: "",
    //   isTrialMember: false
    // })
    
    this.data = members.getList();
  }


}

