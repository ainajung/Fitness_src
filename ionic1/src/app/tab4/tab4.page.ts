import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { MemberService, Member } from '../fitness.service';
import { CommonModule } from '@angular/common';

interface SearchbarChangeEventDetail {
  value?: number;
}

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
  currentEmail : string = "";
  currentAddress : string = "";
  currentEmergency : number = 2222222222;
  currentMedical : string = "";
  currentTrial : boolean = true;
  
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
      this.currentEmail = "";
      this.currentAddress = "";
      this.currentEmergency = 4444444444;
      this.currentMedical = "";
      this.currentTrial = true;
    } else {
      this.position = 0;

      this.currentId = this.data[0].id;
      this.currentName = this.data[0].name;
      this.currentDate = this.data[0].dateOfBirth;
      this.currentGender = this.data[0].gender;
      this.currentType = this.data[0].membershipType;
      this.currentStart = this.data[0].membershipStartDay;
      this.currentNumber = this.data[0].contactNumber;
      this.currentEmail = this.data[0].email;
      this.currentAddress = this.data[0].residentialAddress;
      this.currentEmergency = this.data[0].emergencyContactNumber;
      this.currentMedical = this.data[0].medicalCondition;
      this.currentTrial = this.data[0].isTrialMember;
    }
  }

  edit() {
    if (this.position < 0) {
      alert("Must have data in the list before we can edit")
    } else {
      this.data[this.position].name = this.currentName;
      this.data[this.position].dateOfBirth = this.currentDate;
      this.data[this.position].gender = this.currentGender;
      this.data[this.position].membershipType = this.currentType;
      this.data[this.position].membershipStartDay = this.currentStart;
      this.data[this.position].contactNumber = this.currentNumber;
      this.data[this.position].email = this.currentEmail;
      this.data[this.position].residentialAddress = this.currentAddress;
      this.data[this.position].emergencyContactNumber = this.currentNumber;
      this.data[this.position].medicalCondition = this.currentMedical;
      this.data[this.position].isTrialMember = this.currentTrial;

    }
  }

  prev() {
    if (this.position <= 0) {
      alert("There is no previous member");
    } else {
      this.position --;
      this.currentId = this.data[this.position].id;
      this.currentName = this.data[this.position].name;
      this.currentDate = this.data[this.position].dateOfBirth;
      this.currentGender = this.data[this.position].gender;
      this.currentType = this.data[this.position].membershipType;
      this.currentStart = this.data[this.position].membershipStartDay;
      this.currentNumber = this.data[this.position].contactNumber;
      this.currentEmail = this.data[this.position].email;
      this.currentAddress = this.data[this.position].residentialAddress;
      this.currentEmergency = this.data[this.position].emergencyContactNumber;
      this.currentMedical = this.data[this.position].medicalCondition;
      this.currentTrial = this.data[this.position].isTrialMember;
    }
  }

  next() {

    if (this.position == this.data.length-1) {
      alert("There is no next member");
    } else {
      this.currentId = this.data[this.position].id;
      this.currentName = this.data[this.position].name;
      this.currentDate = this.data[this.position].dateOfBirth;
      this.currentGender = this.data[this.position].gender;
      this.currentType = this.data[this.position].membershipType;
      this.currentStart = this.data[this.position].membershipStartDay;
      this.currentNumber = this.data[this.position].contactNumber;
      this.currentEmail = this.data[this.position].email;
      this.currentAddress = this.data[this.position].residentialAddress;
      this.currentEmergency = this.data[this.position].emergencyContactNumber;
      this.currentMedical = this.data[this.position].medicalCondition;
      this.currentTrial = this.data[this.position].isTrialMember;
    }

  }

  delete() {

    this.data.splice(this.position,1);

    if (this.position == this.data.length) {
      this.position--;
    }

    if (this.data.length == 0) {
      this.currentId = 0;
      this.currentName = "";
      this.currentDate = new Date("19-11-1998");
      this.currentGender = "Male";
      this.currentType = "Premium";
      this.currentStart = new Date("17-12-1887");
      this.currentNumber = 1;
      this.currentEmail = "";
      this.currentAddress = "";
      this.currentEmergency = 9;
      this.currentMedical = "";
      this.currentTrial = true;
    } else {
      this.currentId = this.data[this.position].id;
      this.currentName = this.data[this.position].name;
      this.currentDate = this.data[this.position].dateOfBirth;
      this.currentGender = this.data[this.position].gender;
      this.currentType = this.data[this.position].membershipType;
      this.currentStart = this.data[this.position].membershipStartDay;
      this.currentNumber = this.data[this.position].contactNumber;
      this.currentEmail = this.data[this.position].email;
      this.currentAddress = this.data[this.position].residentialAddress;
      this.currentEmergency = this.data[this.position].emergencyContactNumber;
      this.currentMedical = this.data[this.position].medicalCondition;
      this.currentTrial = this.data[this.position].isTrialMember;
    }
  }

  }

