import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MemberService } from '../shared/member.service'

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  providers:[MemberService]
})
export class MemberComponent implements OnInit {

  constructor(public memberService: MemberService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){

  }

}
