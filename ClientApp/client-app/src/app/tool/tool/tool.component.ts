import { Component, OnInit, Input } from '@angular/core';
import { Tool } from 'src/app/models/tool';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent implements OnInit {

  @Input() tool: Tool;

  constructor() { }

  ngOnInit(): void {
  }

}
