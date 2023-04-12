import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { MemberService, Member } from '../fitness.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, CommonModule],
})
export class Tab4Page {

  data : Member[];
  position : number = 0;
  
  currentId : number = 0;
  currentName : string = "";
  currentDate : Date = new Date();
  currentGender : string = "";
  currentType : string = "";
  currentStart : Date = new Date();
  currentNumber : number = 1111111111;
  currrentEmail : string = "";
  currentAddress : string = "";
  currentEmergency : number = 2222222222;
  currentMedical : string = "";
  currendtTrial : boolean = true;
  
  constructor (private members: MemberService) {
    this.data = this.members.getList();
    if(this.data.length == 0) {
      this.position = -1;
      
      this.currentId = 0;
      this.currentName = "";
      this.currentDate = new Date();
      this.currentGender = "";
      this.currentType = "";
      this.currentStart = new Date();
      this.currentNumber = 3333333333;
      this.currrentEmail = "";
      this.currentAddress = "";
      this.currentEmergency = 4444444444;
      this.currentMedical = "";
      this.currendtTrial = true;
    } else {
      this.position = 0;

      this.currentId = this.data[0].id;
      this.currentName = this.data[0].name;
      this.currentDate = this.data[0].dateOfBirth;
      this.currentGender = this.data[0].gender;
      this.currentType = this.data[0].membershipType;
      this.currentStart = this.data[0].membershipStartDay;
      this.currentNumber = this.data[0].contactNumber;
      this.currrentEmail = this.data[0].email;
      this.currentAddress = this.data[0].residentialAddress;
      this.currentEmergency = this.data[0].emergencyContactNumber;
      this.currentMedical = this.data[0].medicalCondition;
      this.currendtTrial = this.data[0].isTrialMember;
    }
  }

}
