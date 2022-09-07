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
  sleeperStatus:string;
  ACStatus:string;
  numSeats: number;

  constructor() {
    this.tempBill = 0;
    this.seatsNumber = 1;
    this.baseCost = 0;
    this.ACCost = 0;
    this.sleeperCost = 0;
    this.sleeperStatus = "Non Sleeper";
    this.ACStatus = "Non AC";
    this.numSeats = 1;
   }

  
  ngOnInit(): void {
  }

  onSubmit(contactForm1: any) {

    if(contactForm1.value.sourcecity == "" || contactForm1.value.destcity == ""){
      return;
    }

    if(contactForm1.value.sourcecity == contactForm1.value.destcity){
      alert("Select separate Source and Destination");
      return;
    }
   
    var ticketID = `Ticket${Math.floor(Math.random() * 1000)}`;

    var finalAmount = this.tempBill;//this.calculateBill(contactForm1);

    var newTicket: any = {
      "username": localStorage.getItem("currentUser"),
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

    
    let tickets:any[] = JSON.parse(localStorage.getItem("tickets")|| "[]");
    tickets.push(newTicket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
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

    if(details.value.sourcecity == details.value.destcity){
      alert("Select separate Source and Destination");
      return;
    }

    console.log("Got src city:" + details.value.sourcecity);
    console.log("Got src city:" + details.value.destcity);
    switch(details.value.sourcecity){
      case "Pune":
        //this.tempBill = this.tempBill +  this.seatsNumber * mapPune.get(details.value.destcity)!;  
        this.baseCost = mapPune.get(details.value.destcity)!;
        this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
        break;
      case "Mumbai":
        //this.tempBill = this.tempBill +  this.seatsNumber * mapMumbai.get(details.value.destcity)!; 
        this.baseCost = mapMumbai.get(details.value.destcity)!;
        this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
        break;
      case "Nagpur":
        //this.tempBill = this.tempBill +  this.seatsNumber * mapNagpur.get(details.value.destcity)!;  
        this.baseCost = mapNagpur.get(details.value.destcity)!;
        this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
        break;
      case "Bengaluru":
        //this.tempBill = this.tempBill +  this.seatsNumber * mapBengaluru.get(details.value.destcity)!;  
        this.baseCost = mapBengaluru.get(details.value.destcity)!;
        this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
        break; 
      case "Kolkata":
        //this.tempBill = this.tempBill +  this.seatsNumber * mapKolkata.get(details.value.destcity)!;  
        this.baseCost = mapKolkata.get(details.value.destcity)!;
        this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
        break;  
      default:
        this.tempBill=0; break;
      }

  }

  onChangeACStatus(details: any){
    if(details.value.ACstatus == "AC"){
      this.ACCost = 100;
    }
    else{
      this.ACCost = 0;
    }
    if(this.baseCost!=0){
      this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
    }
  }

  onChangeSeats(details: any){
    this.seatsNumber = details.value.seats;
    this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
  }

  onChangeSleeper(details:any){
    console.log(details.value.sleeperstatus)
    if(details.value.sleeperstatus == "Sleeper"){
      this.sleeperCost = 200;
    }
    else{
      this.sleeperCost = 0;
    }
    if(this.baseCost!=0){
      this.tempBill = (this.baseCost +this.ACCost + this.sleeperCost )* this.seatsNumber ;
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
