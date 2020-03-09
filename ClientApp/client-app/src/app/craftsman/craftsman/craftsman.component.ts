import { Component, OnInit, Input } from '@angular/core';
import { Craftsman } from 'src/app/models/craftsman';

@Component({
  selector: 'app-craftsman',
  templateUrl: './craftsman.component.html',
  styleUrls: ['./craftsman.component.scss'],
})
export class CraftsmanComponent implements OnInit {
  @Input() craftsman: Craftsman;

  constructor() {}

  ngOnInit(): void {}
}
