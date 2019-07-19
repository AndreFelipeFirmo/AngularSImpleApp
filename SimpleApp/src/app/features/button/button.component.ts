import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})


export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() classes = 'Primary' || 'Secondary';
  @Input()
  value: string;
  @Input()
  disabled: boolean;
  @Input()
  name = '';

  ngOnInit() {
  }

}
