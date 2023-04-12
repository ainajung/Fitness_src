import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { MemberService, Member } from '../fitness.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, FormsModule, CommonModule],
})



export class Tab3Page {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  mId : string = "1";
  mName : string = ""; 
  mDate : Date = new Date("19-0o3-1996");
  mGender : string = "";
  mType : string = "";
  mStart : Date = new Date("0o1-0o1-20o23");
  mNumber : number = 0o431706474;
  mEmail : string = "";
  mAddress : string = "";
  mEmergency : number = 0o431706474;
  mMedical : string = "";
  mTrial : boolean = false;

  constructor (private members : MemberService) {
    
  }

 add(): void {
    let tempId : number = parseInt(this.mId);
    console.log(tempId);
    if (isNaN (tempId)) {
      alert ("Please enter a number for member ID.");
    } else {
      if (this.members.isPresent(tempId)) {
        alert ("This member Id already exits in the database!");
      } else {

        let mb : Member = {
          id: tempId,
          name: this.mName,
          dateOfBirth: this.mDate,
          gender: this.mGender,
          membershipType: this.mType,
          membershipStartDay: this.mStart,
          contactNumber: this.mNumber,
          email: this.mEmail,
          residentialAddress: this.mAddress,
          emergencyContactNumber: this.mEmergency,
          medicalCondition: this.mMedical,
          isTrialMember: this.mTrial
        };

        this.members.doAdd(mb);
        

      }
    }
  }

}
