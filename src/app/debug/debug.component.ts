import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  @Input() form;

  constructor() { }

  ngOnInit() {
    
  }

}