import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent{
  @Input() userName: string;
  @Output() userNameChange = new EventEmitter <string> ();
  onNameChange(newName: string) {
    this.userName = newName
    this.userNameChange.emit(newName);

  }

}
