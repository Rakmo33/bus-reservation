import { Component, OnInit } from '@angular/core';

var mapPune = new Map<string, number>([["Mumbai", 100], ["Nagpur", 200], ["Kolkata", 300], ["Bengaluru", 400]]);
var mapMumbai = new Map<string, number>([["Pune", 100], ["Nagpur", 250], ["Kolkata", 400], ["Bengaluru", 500]]);
var mapNagpur = new Map<string, number>([["Pune", 200], ["Mumbai", 250], ["Kolkata", 350], ["Bengaluru", 450]]);
var mapKolkata = new Map<string, number>([["Pune", 300], ["Mumbai", 400], ["Nagpur", 350], ["Bengaluru", 500]]);
var mapBengaluru = new Map<string, number>([["Pune", 400], ["Mumbai", 500], ["Kolkata", 500], ["Nagpur", 450]]);

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})

export class BookingPageComponent implements OnInit {

  tempBill:number;
  seatsNumber: number;
  baseCost: number;
  ACCost:number;
  sleeperCost:number;

  constructor() {
    this.tempBill = 0;
    this.seatsNumber = 1;
    this.baseCost = 0;
    this.ACCost = 0;
    this.sleeperCost = 0;
   }

  
  ngOnInit(): void {
  }

  onSubmit(contactForm1: any) {
   
    var ticketID = `Ticket${Math.floor(Math.random() * 1000)}`;

    var finalAmount = this.calculateBill(contactForm1);

    var newTicket: any = {
      "ticketID": ticketID,
      "source": contactForm1.value.sourcecity,
      "destination": contactForm1.value.destcity,
      "date": contactForm1.value.date,
      "time": contactForm1.value.time,
      "seats": contactForm1.value.seats,
      "ACStatus": contactForm1.value.ACstatus,
      "sleeperStatus": contactForm1.value.sleeperstatus,
      "totalBill": finalAmount
    };

    
    localStorage.setItem("newTicket", newTicket);
    alert("Ticket booked successfully "+ finalAmount);
  }

  calculateBill(details: any){
    
    var bill = 0;
    switch(details.value.sourcecity){
      case "Pune":
        bill = bill + details.value.seats * mapPune.get(details.value.destcity)!;  break;
      case "Mumbai":
        bill = bill + details.value.seats * mapMumbai.get(details.value.destcity)!;  break;
      case "Nagpur":
        bill = bill + details.value.seats * mapNagpur.get(details.value.destcity)!;  break;
      case "Bengaluru":
        bill = bill + details.value.seats * mapBengaluru.get(details.value.destcity)!;  break; 
      case "Kolkata":
        bill = bill + details.value.seats * mapKolkata.get(details.value.destcity)!;  break;  
      default:
        bill=0; break;
      }
      
      if(details.value.ACstatus == "AC"){
        bill = bill + 100;
      }

      if(details.value.sleeperstatus == "Sleeper"){
        bill = bill + 200;
      }
      return bill;

  }

  cityList:city[] = [
    new city("1", "Pune"),
    new city('2', 'Mumbai'),
    new city('3', 'Nagpur'),
    new city('4', 'Bengaluru'),
    new city('5', 'Kolkata')
  ];

  timeList:string[] = [
    "06:00", "09:00", "12:00", "15:00", "18:00", "22:00"
  ]

  onChangeCity(details: any){
    if(details.value.sourcecity == "" || details.value.destcity == ""){
      return;
    }
    switch(details.value.sourcecity){
      case "Pune":
        this.tempBill = this.tempBill + details.value.seats * mapPune.get(details.value.destcity)!;  break;
      case "Mumbai":
        this.tempBill = this.tempBill + details.value.seats * mapMumbai.get(details.value.destcity)!;  break;
      case "Nagpur":
        this.tempBill = this.tempBill + details.value.seats * mapNagpur.get(details.value.destcity)!;  break;
      case "Bengaluru":
        this.tempBill = this.tempBill + details.value.seats * mapBengaluru.get(details.value.destcity)!;  break; 
      case "Kolkata":
        this.tempBill = this.tempBill + details.value.seats * mapKolkata.get(details.value.destcity)!;  break;  
      default:
        this.tempBill=0; break;
      }
  }

  onChangeACStatus(details: any){
    if(details.value.ACstatus == "AC"){
      this.ACCost = 100;
      this.tempBill = this.tempBill + this.ACCost + this.sleeperCost;
    }
    else{
      this.ACCost = 0;
    }
  }

  onChangeSeats(details: any){
    this.seatsNumber = details.value.seats;
    this.tempBill = this.baseCost * this.seatsNumber +this.ACCost + this.sleeperCost;
  }

  onChangeSleeper(details:any){
    if(details.value.ACstatus == "Sleeper"){
      this.sleeperCost = 200;
      this.tempBill = this.baseCost * this.seatsNumber +this.ACCost + this.sleeperCost;
    }
    else{
      this.sleeperCost = 0;
    }
  }

}



export class city {
  id:string;
  name:string;
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }}
