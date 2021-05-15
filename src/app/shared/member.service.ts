import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  selectedMember: Member = new Member;
  members: Member[] = [];

  constructor() { }
}
