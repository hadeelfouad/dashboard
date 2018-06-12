import { Component, OnInit } from '@angular/core';
import { APP_RESOURCES } from '../app-resources/app-resources';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appResources = APP_RESOURCES;

  constructor() { }

  ngOnInit() {
  }

}
