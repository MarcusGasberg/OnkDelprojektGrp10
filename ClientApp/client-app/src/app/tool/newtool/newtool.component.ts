import { Component, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/tool';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToolService } from '../tool.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newtool',
  templateUrl: './newtool.component.html',
  styleUrls: ['./newtool.component.scss'],
})
export class NewtoolComponent implements OnInit {
  public tool: FormGroup;
  floatLabelControl = new FormControl('auto');
  // public required = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private service: ToolService,
    private router: Router
  ) {
    this.tool = formBuilder.group({
      color: [null, Validators.required],
      acquired: [null, Validators.required],
      make: [null, Validators.required],
      serialNumber: [null, Validators.required],
      type: [null, Validators.required],
      model: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    if (this.tool.valid) {
      this.service.postTool(this.tool.value as Tool).subscribe({
        next: () => this.router.navigate(['tools']),
      });
    }
  }
}
