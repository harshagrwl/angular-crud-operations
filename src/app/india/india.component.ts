import { Component, OnInit } from '@angular/core';
import {India} from '../india';
@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {
  india: India = {
    id: 1,
    name: 'Uttar Pradesh'
  };

  constructor() { }

  ngOnInit() {
  }

}