import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss']
})
export class HealthPage implements OnInit {

  items: any[] = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit() {
  }

}

