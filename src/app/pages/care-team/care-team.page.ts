import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-care-team',
  templateUrl: './care-team.page.html',
  styleUrls: ['./care-team.page.scss'],
})
export class CareTeamPage implements OnInit {

  items: any[] = [1,2,3,4,5,6];

  constructor() { }

  ngOnInit() {
  }

}
