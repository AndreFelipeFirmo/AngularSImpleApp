import { Component, OnInit, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @ContentChild('contentTitle', {read: TemplateRef}) contentTitle;
  @ContentChild('contentPrimary', {read: TemplateRef}) contentPrimary;
  @ContentChild('contentSegundary', {read: TemplateRef}) contentSegundary;

  ngOnInit() {
  }

}
