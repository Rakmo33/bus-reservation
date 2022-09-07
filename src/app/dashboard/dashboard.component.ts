import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  username:string = localStorage.getItem('currentUser') || "";
  ticketId:string = "XXXXXX";
  source:string = "Pune";
  destination:string = "Mumbai";
  date:string = "04/10/22";
  time:string = "07:30 PM";
  totalCost:string = "500";
  noOfSeats:string = "2";
  isSleeper:string = "No";
  isAc:string = "Yes";

  constructor() { }

  ngOnInit(): void {
  }

}
