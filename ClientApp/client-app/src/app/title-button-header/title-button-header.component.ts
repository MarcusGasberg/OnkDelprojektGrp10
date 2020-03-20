import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title-button-header',
  templateUrl: './title-button-header.component.html',
  styleUrls: ['./title-button-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleButtonHeaderComponent implements OnInit {
  @Input() Icon: string;
  @Input() Title: string;
  @Input() NavigateTo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
