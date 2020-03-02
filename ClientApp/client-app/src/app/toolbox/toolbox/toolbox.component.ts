import { Component, OnInit, Inject, Input } from '@angular/core';
import { ToolboxService } from '../toolbox.service';
import { Toolbox } from '../toolbox';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  @Input() toolbox: Toolbox;

  constructor(private service: ToolboxService) { }

  ngOnInit(): void { }

}
