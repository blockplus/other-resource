import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input('text') private text = 'Hello';

  @Input('color') private color = '#000000';

  constructor() {}

  ngOnInit() {}
}
