import { Injectable } from "@angular/core";

export interface Member {
    id: number,
    name: string,
    dateOfBirth: Date,
    gender: string,
    membershipType: string,
    membershipStartDay: Date,
    contactNumber: number,
    email: string,
    residentialAddress: string,
    emergencyContactNumber: number,
    medicalCondition: string,
    isTrialMember: boolean
};

@Injectable()

export class MemberService {

    mbData : Member[] = [];

    doAdd (m: Member) {
        this.mbData.push(m);
    }

    isPresent (id: number) : boolean {
        for ( let i = 0; i < this.mbData.length; i++) {
            if(this.mbData[i].id == id) return true;
        }
        return false;
    }

    getList() : Member[] {

        return this.mbData;
    }

}