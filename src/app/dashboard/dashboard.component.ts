import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { APP_RESOURCES } from '../app-resources/app-resources';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appResources = [];

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit() {
    this.appResources = await this.dashboardService.getActivities();
  }

}
