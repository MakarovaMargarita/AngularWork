import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  CurrentDate: number = Date.now()
  Message:string = "Angular is awesome"
  ngOnInit(): void {
    
  }
}
