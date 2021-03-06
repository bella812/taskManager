import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;
  toDay: Date;

  Clients: string[];
  Projects: string[];
  Years: number[] = [];
  TeamMembersSummary = [];
  TeamMembers = [];

  constructor(private dashboardService: DashboardService ){

  }
  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 976788;
    this.CurrentExpenditure = 2113507;
    this.AvailableFunds = 52536;
    this.toDay= new Date();

    this.Clients = [
      "ABC Infotech Ltd.", "DEF Software Solitions", "GHI Industries"
    ];

    this.Projects = [
      "Project A","Project B","Project C","Project D"
    ];

    for(let i = 2019; i >= 2010; i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

  this.TeamMembers = [
    {Region:"East", Members:[
      {ID: 1, Name: "Ford", Status: "Available"},
      {ID: 2, Name: "Miller", Status: "Available"},
      {ID: 3, Name: "Jones", Status: "Busy"},
      {ID: 4, Name: "James", Status: "Busy"},
    ]},
    {Region:"West", Members:[
      {ID: 1, Name: "Ford", Status: "Available"},
      {ID: 2, Name: "Miller", Status: "Available"},
      {ID: 3, Name: "Jones", Status: "Busy"},
      {ID: 4, Name: "James", Status: "Busy"},
    ]},
    {Region:"South", Members:[
      {ID: 1, Name: "Ford", Status: "Available"},
      {ID: 2, Name: "Miller", Status: "Available"},
      {ID: 3, Name: "Jones", Status: "Busy"},
      {ID: 4, Name: "James", Status: "Busy"},
    ]},
    {Region:"North", Members:[
      {ID: 1, Name: "Ford", Status: "Available"},
      {ID: 2, Name: "Miller", Status: "Available"},
      {ID: 3, Name: "Jones", Status: "Busy"},
      {ID: 4, Name: "James", Status: "Busy"},
    ]},
  ];
  }
  onProjectChange($event){
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    }else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;
    }else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    }else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
