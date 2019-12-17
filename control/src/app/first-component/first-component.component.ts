import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { this.log ("constructor"); }
  ngOnChanges() { this.log("onChanges"); }
  ngOnInit() { this.log("onInit"); }
  ngDoCheck() { this.log("doCheck"); }

  ngAfterContentInit() { this.log("afterContentInit"); }
  ngAfterContentChecked() { this.log("afterContentChecked"); }
  ngAfterViewInit() { this.log("afterViewInit"); }
  ngAfterViewChecked() { this.log("afterViewChecked"); }

  ngOnDestroy(){ this.log('onDestroy'); }

  private log(msg: string){
    console.log(msg);
  }

}
